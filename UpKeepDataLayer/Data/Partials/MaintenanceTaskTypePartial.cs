using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {
        public virtual DbSet<MaintenanceTaskType> MaintenanceTaskTypes { get; set; } = null!;

        public async Task<IEnumerable<MaintenanceTaskType>> GetMaintenanceTaskTypes()
        {
            return await MaintenanceTaskTypes.AsNoTracking().ToListAsync();
        }
        public async Task<MaintenanceTaskType> GetMaintenanceTaskTypeById(int id)
        {
            return await MaintenanceTaskTypes
                .Where(x => x.MaintenanceTaskTypeId == id)
                .AsNoTracking()
                .SingleAsync();
        }
        public async Task<int> UpdateMaintenanceTaskType(MaintenanceTaskType maintenanceTaskType)
        {
            var entry = Entry(maintenanceTaskType);
            entry.Property(p => p.Name).IsModified = true;
            entry.Property(p => p.Description).IsModified = true;


            return await SaveChangesAsync();
        }
        public async Task<int> AddMaintenanceTaskType(MaintenanceTaskType maintenanceTaskType)
        {
            await MaintenanceTaskTypes.AddAsync(maintenanceTaskType);
            return await SaveChangesAsync();
        }
        public async Task<int> DeleteMaintenanceTaskType(MaintenanceTaskType maintenanceTaskType)
        {
            MaintenanceTaskTypes.Remove(maintenanceTaskType);
            return await SaveChangesAsync();
        }
    }
}
