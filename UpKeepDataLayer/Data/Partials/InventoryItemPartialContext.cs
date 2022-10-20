using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data.Partials
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {
        public virtual DbSet<InventoryItem> InventoryItems { get; set; } = null!;
        public virtual DbSet<InventoryItemType> InventoryItemTypes { get; set; } = null!;

        public async Task<IEnumerable<InventoryItem>> GetInventoryItems()
        {
            return await InventoryItems.AsNoTracking().ToListAsync();
        }

        public async Task<InventoryItem> GetInventoryItemById(int id)
        {
            return await InventoryItems
                .Where(x => x.InventoryItemId == id)
                .AsNoTracking()
                .SingleAsync();
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

        public async Task<int> DeleteInventoryItem(InventoryItem inventoryItem)
        {
            InventoryItems.Remove(inventoryItem);
            return await SaveChangesAsync();
        }
    } 
}
