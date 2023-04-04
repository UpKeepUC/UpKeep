using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IInventoryItemService
    {
        Task<ICollection<InventoryItemModel>> GetInventoryItems();
        Task<InventoryItemModel> GetInventoryItemModelById(int id);
        Task<ICollection<InventoryItemModel>> GetInventoryItemModelByRoomId(int id);
        Task<int> UpdateInventoryItem(InventoryItemAddOrUpdateModel inventoryItemModel);
        Task<int> AddInventoryItem(InventoryItemAddOrUpdateModel inventoryItemModel);
        Task<int> DeleteInventoryItem(InventoryItemModel inventoryItemModel);
  
    }
}
