using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpKeepData.Entity;

namespace UpKeepData.Interfaces
{
    public interface IUpKeepDBContext
    {
        #region Inventory Items
        Task<IEnumerable<InventoryItem>> GetInventoryItems();
        Task<InventoryItem> GetInventoryItemById(int id);
        Task<int> UpdateInventoryItem(InventoryItem inventoryItem);
        Task<int> AddInventoryItem(InventoryItem inventoryItem);
        Task<int> DeleteInventoryItem(InventoryItem inventoryItem);
        #endregion

        #region Inventory Item Types
        Task<IEnumerable<InventoryItemType>> GetInventoryItemTypes();
        Task<InventoryItemType> GetInventoryItemTypeById(int id);
        Task<int> UpdateInventoryItemType(InventoryItemType inventoryItemType);
        Task<int> AddInventoryItemType(InventoryItemType inventoryItemType);
        Task<int> DeleteInventoryItemType(InventoryItemType inventoryItemType);
        #endregion
    }
}
