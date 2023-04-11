using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeep.Services
{
    public class InventoryItemService : IInventoryItemService
    {
        private IUpKeepDBContext upKeepDBContext;
        private readonly IMapper mapper;

        public InventoryItemService(IUpKeepDBContext upKeepDBContext, IMapper mapper)
        {
            this.upKeepDBContext = upKeepDBContext;
            this.mapper = mapper;
        }

        public async Task<ICollection<InventoryItemModel>> GetInventoryItems()
        {
            var result = await upKeepDBContext.GetInventoryItems();
            var models = mapper.Map<ICollection<InventoryItemModel>>(result);
            return models;
        }

        public async Task<InventoryItemModel> GetInventoryItemModelById(int id)
        {
            var result = await upKeepDBContext.GetInventoryItemById(id);
            var model = mapper.Map<InventoryItemModel>(result);
            return model;
        }

        public async Task<ICollection<InventoryItemModel>> GetInventoryItemModelByRoomId(int id)
        {
            var result = await upKeepDBContext.GetInventoryItemByRoomId(id);
            var model = mapper.Map<ICollection<InventoryItemModel>>(result);
            return model;
        }

        public async Task<int> UpdateInventoryItem(InventoryItemAddOrUpdateModel inventoryItemModel)
        {
            var model = mapper.Map<InventoryItem>(inventoryItemModel);
            return await upKeepDBContext.UpdateInventoryItem(model);
        }

        public async Task<int> AddInventoryItem(InventoryItemAddOrUpdateModel inventoryItemModel)
        {
            var model = mapper.Map<InventoryItem>(inventoryItemModel);
            return await upKeepDBContext.AddInventoryItem(model);
        }

        public async Task<int> DeleteInventoryItem(int id)
        {
            return await upKeepDBContext.DeleteInventoryItem(id);
        }
    }
}
