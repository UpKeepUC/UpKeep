using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IInventoryItemTypeService
    {
        Task<IEnumerable<InventoryItemTypeModel>> GetInventoryItemTypes();
        Task<InventoryItemTypeModel> GetInventoryItemTypeById(int id);
        Task<int> UpdateInventoryItemType(InventoryItemTypeModel inventoryItemTypeModel);
        Task<int> AddInventoryItemType(InventoryItemTypeModel inventoryItemTypeModel);
        Task<int> DeleteInventoryItemType(InventoryItemTypeModel inventoryItemTypeModel);
    }
}
