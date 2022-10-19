using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;

namespace UpKeepData.Data
{
    public partial class UpKeepDatabaseContext : DbContext
    {
        public DbSet<InventoryItemEntity> InventoryItems { get; set; }
        public DbSet<InventoryItemTypeEntity> InventoryItemsTypes { get; set; }

    }
}
