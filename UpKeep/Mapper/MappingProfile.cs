using AutoMapper;
using UpKeep.Models;
using UpKeepData.Entity;

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
                .ReverseMap();
                //.ForMember(x => x.MaintenanceTaskTypeModel, opt => opt.MapFrom(x => x.MaintenanceTaskType));
            CreateMap<RoomModel, Room>()
                .ReverseMap()
                .ForMember(x => x.RoomType, opt => opt.MapFrom(x => x.RoomType));
            CreateMap<InventoryItemTypeModel, InventoryItemType>()
                .ReverseMap();
            CreateMap<RoomTypeModel, RoomType>()
                .ReverseMap();
        }
    }
}
