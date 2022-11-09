using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IRoomService
    {
        Task<ICollection<RoomModel>> GetRooms();
        Task<RoomModel> GetRoomModelById(int id);
        Task<int> UpdateRoom(RoomModel RoomModel);
        Task<int> AddRoom(RoomModel RoomModel);
        Task<int> DeleteRoom(RoomModel RoomModel);

    }
}
