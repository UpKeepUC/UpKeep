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
            CreateMap<InventoryItemTypeModel, InventoryItemType>()
                .ReverseMap();
        }
    }
}
