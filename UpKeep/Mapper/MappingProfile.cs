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
                .ReverseMap();
        }
    }
}
