using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeep.Services
{
    public class InventoryItemTypeService : IInventoryItemTypeService
    {
        private IUpKeepDBContext _upKeepDBContext;
        private readonly IMapper _mapper;

        public InventoryItemTypeService(IUpKeepDBContext upKeepDBContext, IMapper _mapper)
        {
            this._upKeepDBContext = upKeepDBContext;
            this._mapper = _mapper;
        }

        public async Task<IEnumerable<InventoryItemTypeModel>> GetInventoryItemTypes()
        {
            var result = await _upKeepDBContext.GetInventoryItemTypes();
            var models = _mapper.Map<IEnumerable<InventoryItemTypeModel>>(result);
            return models;
        }

        public async Task<InventoryItemTypeModel> GetInventoryItemTypeById(int id)
        {
            var result = await _upKeepDBContext.GetInventoryItemTypeById(id);
            var model = _mapper.Map<InventoryItemTypeModel>(result);
            return model;
        }

        public async Task<int> UpdateInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            var model = _mapper.Map<InventoryItemType>(InventoryItemTypeModel);
            return await _upKeepDBContext.UpdateInventoryItemType(model);
        }

        public async Task<int> AddInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            var model = _mapper.Map<InventoryItemType>(InventoryItemTypeModel);
            return await _upKeepDBContext.UpdateInventoryItemType(model);
        }

        public async Task<int> DeleteInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            var model = _mapper.Map<InventoryItemType>(InventoryItemTypeModel);
            return await _upKeepDBContext.DeleteInventoryItemType(model);
        }
    }
}


