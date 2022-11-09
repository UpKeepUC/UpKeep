using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {
        public virtual DbSet<RoomType> RoomTypes { get; set; } = null!;

        public async Task<ICollection<RoomType>> GetRoomTypes()
        {
            return await RoomTypes
                .Include(x => x.Rooms)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<RoomType> GetRoomTypeById(int id)
        {
            return await RoomTypes
                .Where(x => x.RoomTypeId == id)
                .AsNoTracking()
                .SingleAsync();
        }

        public async Task<int> UpdateRoomType(RoomType RoomType)
        {
            var entry = Entry(RoomType);
            entry.Property(p => p.RoomTypeId).IsModified = true;
            entry.Property(p => p.Name).IsModified = true;
            entry.Property(p => p.Description).IsModified = true;

            return await SaveChangesAsync();
        }

        public async Task<int> AddRoomType(RoomType RoomType)
        {
            await RoomTypes.AddAsync(RoomType);
            return await SaveChangesAsync();
        }

        public async Task<int> DeleteRoomType(RoomType RoomType)
        {
            RoomTypes.Remove(RoomType);
            return await SaveChangesAsync();
        }
    }
}
