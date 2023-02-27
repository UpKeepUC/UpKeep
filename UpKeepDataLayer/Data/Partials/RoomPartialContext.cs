using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {
        public virtual DbSet<Room> Rooms { get; set; } = null!;

        public async Task<ICollection<Room>> GetRooms()
        {
            return await Rooms
                .Include(x => x.RoomType)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<Room> GetRoomById(int id)
        {
            return await Rooms
                .Where(x => x.RoomId == id)
                .AsNoTracking()
                .SingleAsync();
        }

        public async Task<int> UpdateRoom(Room Room)
        {
            var entry = Entry(Room);
            entry.Property(p => p.RoomTypeId).IsModified = true;
            entry.Property(p => p.RoomLocation).IsModified = true;
            entry.Property(p => p.RoomNumber).IsModified = true;
            entry.Property(p => p.RoomId).IsModified = true;

            return await SaveChangesAsync();
        }

        public async Task<int> AddRoom(Room Room)
        {
            await Rooms.AddAsync(Room);
            return await SaveChangesAsync();
        }

        public async Task<int> DeleteRoom(Room Room)
        {
            Rooms.Remove(Room);
            return await SaveChangesAsync();
        }
    }
}
