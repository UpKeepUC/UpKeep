using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext 
    {
        public virtual DbSet<MaintenanceTask> maintenanceTasks { get; set; } = null!;

        public async Task<IEnumerable<MaintenanceTask>> GetMaintenanceTasks()
        {
            return await maintenanceTasks
                .Include(x => x.MaintenanceTaskType)
                .AsNoTracking()
                .ToListAsync();
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
                .Join(InventoryItemMaintenanceTasks, mt => mt.MaintenanceTaskId, itmt => itmt.MaintenanceTaskId, (mt, itmt) => new { mt, itmt })
                .Join(InventoryItems, x => x.itmt.InventoryItemId, i => i.InventoryItemId, (x, i) => new { x.mt, i })
                .Where(x => x.i.RoomId == id)
                .Select(x => x.mt)
                .ToListAsync();
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
