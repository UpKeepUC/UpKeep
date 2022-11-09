using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeep.Services
{
    public class RoomTypeService : IRoomTypeService
    {
        private IUpKeepDBContext upKeepDBContext;
        private readonly IMapper mapper;

        public RoomTypeService(IUpKeepDBContext upKeepDBContext, IMapper mapper)
        {
            this.upKeepDBContext = upKeepDBContext;
            this.mapper = mapper;
        }

        public async Task<ICollection<RoomTypeModel>> GetRoomTypes()
        {
            var result = await upKeepDBContext.GetRoomTypes();
            var models = mapper.Map<ICollection<RoomTypeModel>>(result);
            return models;
        }

        public async Task<RoomTypeModel> GetRoomTypeModelById(int id)
        {
            var result = await upKeepDBContext.GetRoomTypeById(id);
            var model = mapper.Map<RoomTypeModel>(result);
            return model;
        }

        public async Task<int> UpdateRoomType(RoomTypeModel RoomTypeModel)
        {
            var model = mapper.Map<RoomType>(RoomTypeModel);
            return await upKeepDBContext.UpdateRoomType(model);
        }

        public async Task<int> AddRoomType(RoomTypeModel RoomTypeModel)
        {
            var model = mapper.Map<RoomType>(RoomTypeModel);
            return await upKeepDBContext.AddRoomType(model);
        }

        public async Task<int> DeleteRoomType(RoomTypeModel RoomTypeModel)
        {
            var model = mapper.Map<RoomType>(RoomTypeModel);
            return await upKeepDBContext.DeleteRoomType(model);
        }
    }
}
