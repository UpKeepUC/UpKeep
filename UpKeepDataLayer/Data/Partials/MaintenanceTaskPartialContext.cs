using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;
using UpKeepData.Models;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext 
    {
        public virtual DbSet<MaintenanceTask> maintenanceTasks { get; set; } = null!;
        public virtual DbSet<InventoryItemMaintenanceTask> inventoryItemMaintenanceTasks { get; set; } = null!;

        public async Task<IEnumerable<MaintenanceTaskRoomModel>> GetMaintenanceTasks()
        {
            var lmt = await maintenanceTasks
                .Include(x => x.MaintenanceTaskType)
                .AsNoTracking()
                .ToListAsync();

            var mtReturn =  new List<MaintenanceTaskRoomModel>();

            foreach (var mt in lmt)
            {
                var mtit = await maintenanceTasks
                .Join(inventoryItemMaintenanceTasks, mt => mt.MaintenanceTaskId, itmt => itmt.MaintenanceTaskId, (mt, itmt) => new { mt, itmt })
                .Join(InventoryItems, x => x.itmt.InventoryItemId, i => i.InventoryItemId, (x, i) => new { x.mt, i })
                .Where(x => x.mt.MaintenanceTaskId == mt.MaintenanceTaskId).ToListAsync();

                if(mtit.Count > 0)
                {
                    var rooms = await Rooms.Where(x => x.RoomId == mtit[0].i.RoomId).ToListAsync();
                    var mtrm = new MaintenanceTaskRoomModel()
                    {
                        Description = mt.Description,
                        Name = mt.Name,
                        MaintenanceTaskId = mt.MaintenanceTaskId,
                        MaintenanceTaskTypeId = mt.MaintenanceTaskTypeId,
                        MaintenanceTaskDueDate = mt.MaintenanceTaskDueDate,
                        MaintenanceTaskCompletedDate = mt.MaintenanceTaskCompletedDate,
                        MaintenanceTaskType = new MaintenanceTaskType()
                        {
                            MaintenanceTaskTypeId = mt.MaintenanceTaskType.MaintenanceTaskTypeId,
                            Description = mt.MaintenanceTaskType.Description,
                            Name = mt.MaintenanceTaskType.Name
                        }
                       

                    };

                    mtrm.MaintenanceTaskRooms = new List<MaintenanceTaskRoom>();

                    foreach (var room in rooms)
                    {
                        mtrm.MaintenanceTaskRooms.Add(new MaintenanceTaskRoom()
                        {
                            RoomId = room.RoomId,
                            RoomLocation = room.RoomLocation,
                            RoomNumber = room.RoomNumber,
                            RoomType = room.RoomType,
                            RoomTypeId = room.RoomTypeId
                        });
                    }

                    mtReturn.Add(mtrm);
                }
                else
                {
                    mtReturn.Add(new MaintenanceTaskRoomModel()
                    {
                        Description = mt.Description,
                        Name = mt.Name,
                        MaintenanceTaskId = mt.MaintenanceTaskId,
                        MaintenanceTaskTypeId = mt.MaintenanceTaskTypeId,
                        MaintenanceTaskDueDate = mt.MaintenanceTaskDueDate,
                        MaintenanceTaskCompletedDate = mt.MaintenanceTaskCompletedDate,
                        MaintenanceTaskType = new MaintenanceTaskType()
                        {
                            MaintenanceTaskTypeId = mt.MaintenanceTaskType.MaintenanceTaskTypeId,
                            Description = mt.MaintenanceTaskType.Description,
                            Name = mt.MaintenanceTaskType.Name
                        }
                    });
                }
            }

            return mtReturn;

        }

        public async Task<MaintenanceTask> GetMaintenanceTaskById(int id)
        {
            return await maintenanceTasks
                .Where(x => x.MaintenanceTaskId == id)
                .AsNoTracking()
                .SingleAsync();
        }

        public async Task<IEnumerable<MaintenanceTask>> GetMaintenanceTaskByRoomId(int id)
        {
            return await maintenanceTasks
                .Join(inventoryItemMaintenanceTasks, mt => mt.MaintenanceTaskId, itmt => itmt.MaintenanceTaskId, (mt, itmt) => new { mt, itmt })
                .Join(InventoryItems, x => x.itmt.InventoryItemId, i => i.InventoryItemId, (x, i) => new { x.mt, i })
                .Where(x => x.i.RoomId == id)
                .Select(x => x.mt)
                .ToListAsync();
        }

        public async Task<IEnumerable<MaintenanceTask>> GetMaintenanceTaskByInventoryId(int id)
        {
            return await maintenanceTasks
                .Join(inventoryItemMaintenanceTasks, mt => mt.MaintenanceTaskId, itmt => itmt.MaintenanceTaskId, (mt, itmt) => new { mt, itmt })
                .Join(InventoryItems, x => x.itmt.InventoryItemId, i => i.InventoryItemId, (x, i) => new { x.mt, i })
                .Select(x => x.mt)
                .ToListAsync();
        }

        public async Task<int> LinkMaintenanceTaskToInventoryItem(LinkInventoryToMaintenanceModel link)
        {
            foreach(var id in link.InventoryItemIds)
            {
                await inventoryItemMaintenanceTasks.AddAsync(new InventoryItemMaintenanceTask()
                {
                    MaintenanceTaskId = link.MaintenanceTaskId,
                    InventoryItemId = id,
                    InventoryItemMaintenanceTaskId = 0,
                    DateLinked = DateTime.Now,
                });
            }

            return await SaveChangesAsync();
        }

        public async Task<int> UpdateMaintenanceTask(MaintenanceTask maintenanceTask)
        {
            var entry = Entry(maintenanceTask);
            entry.Property(p => p.MaintenanceTaskTypeId).IsModified = true;
            entry.Property(p => p.MaintenanceTaskDueDate).IsModified = true;
            entry.Property(p => p.MaintenanceTaskCompletedDate).IsModified = true;
            entry.Property(p => p.Name).IsModified = true;
            entry.Property(p => p.Description).IsModified = true;

            return await SaveChangesAsync();
        }

        public async Task<int> AddMaintenanceTask(MaintenanceTask maintenanceTask)
        {
            await maintenanceTasks.AddAsync(maintenanceTask);
            return await SaveChangesAsync();
        }

        public async Task<int> DeleteMaintenanceTask(MaintenanceTask maintenanceTask)
        {
            maintenanceTasks.Remove(maintenanceTask);
            return await SaveChangesAsync();
        }
    }
}
