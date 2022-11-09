using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IInventoryItemService
    {
        Task<ICollection<InventoryItemModel>> GetInventoryItems();
        Task<InventoryItemModel> GetInventoryItemModelById(int id);
        Task<int> UpdateInventoryItem(InventoryItemModel inventoryItemModel);
        Task<int> AddInventoryItem(InventoryItemModel inventoryItemModel);
        Task<int> DeleteInventoryItem(InventoryItemModel inventoryItemModel);
  
    }
}
