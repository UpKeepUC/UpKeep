using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;

namespace UpKeepData
{
    public class UpKeepDatabaseContext : DbContext
    {
        public UpKeepDatabaseContext(DbContextOptions<UpKeepDatabaseContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InventoryItemEntity>().ToTable("InventoryItem");
            modelBuilder.Entity<InventoryItemTypeEntity>().ToTable("InventoryItemType");
        }
    }
}
