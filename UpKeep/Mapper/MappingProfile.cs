using AutoMapper;
using UpKeep.Models;
using UpKeepData.Data.UpKeepIdentityContext;
using UpKeepData.Entity;
using User = UpKeepData.Data.UpKeepIdentityContext.User;

namespace UpKeep.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<InventoryItemModel, InventoryItem>()
                .ReverseMap()
                .ForMember(x => x.InventoryItemTypeModel, opt => opt.MapFrom(x => x.InventoryItemType));
            CreateMap<MaintenanceTaskModel, MaintenanceTask>()
                .ReverseMap()
                .ForMember(x => x.MaintenanceTaskTypeModel, opt => opt.MapFrom(x => x.MaintenanceTaskType));
            CreateMap<RoomModel, Room>()
                .ReverseMap()
                .ForMember(x => x.RoomType, opt => opt.MapFrom(x => x.RoomType));
            CreateMap<InventoryItemTypeModel, InventoryItemType>()
                .ReverseMap();
            CreateMap<MaintenanceTaskTypeModel, MaintenanceTaskType>()
                .ReverseMap();
            CreateMap<RoomTypeModel, RoomType>()
                .ReverseMap();
            CreateMap<UserRegistrationModel, User>()
                .ReverseMap();
            CreateMap<UserLoginModel, User>()
                .ReverseMap();
        }
    }
}
