using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeep.Services
{
    public class RoomService : IRoomService
    {
        private IUpKeepDBContext upKeepDBContext;
        private readonly IMapper mapper;

        public RoomService(IUpKeepDBContext upKeepDBContext, IMapper mapper)
        {
            this.upKeepDBContext = upKeepDBContext;
            this.mapper = mapper;
        }

        public async Task<ICollection<RoomModel>> GetRooms()
        {
            var result = await upKeepDBContext.GetRooms();
            var models = mapper.Map<ICollection<RoomModel>>(result);
            return models;
        }

        public async Task<RoomModel> GetRoomModelById(int id)
        {
            var result = await upKeepDBContext.GetRoomById(id);
            var model = mapper.Map<RoomModel>(result);
            return model;
        }

        public async Task<int> UpdateRoom(RoomModel RoomModel)
        {
            var model = mapper.Map<Room>(RoomModel);
            return await upKeepDBContext.UpdateRoom(model);
        }

        public async Task<int> AddRoom(RoomModel RoomModel)
        {
            var model = mapper.Map<Room>(RoomModel);
            return await upKeepDBContext.AddRoom(model);
        }

        public async Task<int> DeleteRoom(RoomModel RoomModel)
        {
            var model = mapper.Map<Room>(RoomModel);
            return await upKeepDBContext.DeleteRoom(model);
        }
    }
}
