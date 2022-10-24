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
    }
}
