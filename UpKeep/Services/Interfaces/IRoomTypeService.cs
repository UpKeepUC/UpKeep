using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IRoomTypeService
    {
        Task<ICollection<RoomTypeModel>> GetRoomTypes();
        Task<RoomTypeModel> GetRoomTypeModelById(int id);
        Task<int> UpdateRoomType(RoomTypeModel RoomTypeModel);
        Task<int> AddRoomType(RoomTypeModel RoomTypeModel);
        Task<int> DeleteRoomType(RoomTypeModel RoomTypeModel);

    }
}
