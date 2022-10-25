using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {
        public virtual DbSet<InventoryItemType> InventoryItemTypes { get; set; } = null!;

        public async Task<IEnumerable<InventoryItemType>> GetInventoryItemTypes()
        {
            return await InventoryItemTypes.AsNoTracking().ToListAsync();
        }
        public async Task<InventoryItemType> GetInventoryItemTypeById(int id)
        {
            return await InventoryItemTypes
                .Where(x => x.InventoryItemTypeId == id)
                .AsNoTracking()
                .SingleAsync();
        }
        public async Task<int> UpdateInventoryItemType(InventoryItemType inventoryItemType)
        {
            var entry = Entry(inventoryItemType);
            entry.Property(p => p.Name).IsModified = true;
            entry.Property(p => p.Description).IsModified = true;


            return await SaveChangesAsync();
        }
        public async Task<int> AddInventoryItemType(InventoryItemType inventoryItemType)
        {
            await InventoryItemTypes.AddAsync(inventoryItemType);
            return await SaveChangesAsync();
        }
        public async Task<int> DeleteInventoryItemType(InventoryItemType inventoryItemType)
        {
            InventoryItemTypes.Remove(inventoryItemType);
            return await SaveChangesAsync();
        }
    }
}
