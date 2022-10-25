using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeep.Services
{
    public class InventoryItemTypeService : IInventoryItemTypeService
    {
        private IUpKeepDBContext upKeepDBContext;
        private readonly IMapper mapper;

        public InventoryItemTypeService(IUpKeepDBContext upKeepDBContext, IMapper mapper)
        {
            this.upKeepDBContext = upKeepDBContext;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<InventoryItemTypeModel>> GetInventoryItemTypes()
        {
            var result = await upKeepDBContext.GetInventoryItemTypes();
            var models = mapper.Map<IEnumerable<InventoryItemTypeModel>>(result);
            return models;
        }

        public async Task<InventoryItemTypeModel> GetInventoryItemTypeModelById(int id)
        {
            var result = await upKeepDBContext.GetInventoryItemTypeById(id);
            var model = mapper.Map<InventoryItemTypeModel>(result);
            return model;
        }

        public async Task<int> UpdateInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            var model = mapper.Map<InventoryItemType>(InventoryItemTypeModel);
            return await upKeepDBContext.UpdateInventoryItemType(model);
        }

        public async Task<int> AddInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            var model = mapper.Map<InventoryItemType>(InventoryItemTypeModel);
            return await upKeepDBContext.UpdateInventoryItemType(model);
        }

        public async Task<int> DeleteInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            var model = mapper.Map<InventoryItemType>(InventoryItemTypeModel);
            return await upKeepDBContext.DeleteInventoryItemType(model);
        }
    }
}


