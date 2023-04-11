using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {
        public virtual DbSet<InventoryItem> InventoryItems { get; set; } = null!;

        public async Task<ICollection<InventoryItem>> GetInventoryItems()
        {
            var items = await InventoryItems
                .Include(x => x.InventoryItemType)
                .Include(x => x.Room)
                .AsNoTracking()
                .ToListAsync();

            foreach(var item in items)
            {
                var roomType = await RoomTypes.Where(x => x.RoomTypeId == item.Room.RoomTypeId).FirstAsync() ?? null;

                if(roomType != null)
                {
                    item.Room.RoomType = roomType;
                }               
            }

            return items;
        }

        public async Task<InventoryItem> GetInventoryItemById(int id)
        {
            return await InventoryItems
                .Where(x => x.InventoryItemId == id)
                .Include(x => x.InventoryItemType)
                .Include(x => x.Room)
                .AsNoTracking()
                .SingleAsync();
        }

        public async Task<ICollection<InventoryItem>> GetInventoryItemByRoomId(int id)
        {
            return await InventoryItems
                .Where(x => x.RoomId == id)
                .Include(x => x.InventoryItemType)
                .Include(x => x.Room)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<int> UpdateInventoryItem(InventoryItem inventoryItem)
        {
            var entry = Entry(inventoryItem);
            entry.Property(p => p.InventoryItemTypeId).IsModified = true;
            entry.Property(p => p.InventoryItemCost).IsModified = true;
            entry.Property(p => p.PurchaseDate).IsModified = true;
            entry.Property(p => p.QrcodeId).IsModified = true;
            entry.Property(p => p.RoomId).IsModified = true;

            return await SaveChangesAsync();
        }

        public async Task<int> AddInventoryItem(InventoryItem inventoryItem)
        {
            await InventoryItems.AddAsync(inventoryItem);
            return await SaveChangesAsync();
        }

        public async Task<int> DeleteInventoryItem(int id)
        {
            var ii = await InventoryItems.Where(x => x.InventoryItemId == id).FirstOrDefaultAsync();
            if(ii!= null)
            {
                InventoryItems.Remove(ii);
                return await SaveChangesAsync();
            }
            return -1;
        }
    } 
}
