using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpKeepData.Entity;
using UpKeepData.Models;

namespace UpKeepData.Interfaces
{
    public interface IUpKeepDBContext
    {
        #region Inventory Items
        Task<ICollection<InventoryItem>> GetInventoryItems();
        Task<InventoryItem> GetInventoryItemById(int id);
        Task<ICollection<InventoryItem>> GetInventoryItemByRoomId(int id);
        Task<int> UpdateInventoryItem(InventoryItem inventoryItem);
        Task<int> AddInventoryItem(InventoryItem inventoryItem);
        Task<int> DeleteInventoryItem(int id);
        #endregion

        #region Inventory Item Types
        Task<IEnumerable<InventoryItemType>> GetInventoryItemTypes();
        Task<InventoryItemType> GetInventoryItemTypeById(int id);
        Task<int> UpdateInventoryItemType(InventoryItemType inventoryItemType);
        Task<int> AddInventoryItemType(InventoryItemType inventoryItemType);
        Task<int> DeleteInventoryItemType(InventoryItemType inventoryItemType);
        #endregion

        #region Maintenance Task
        Task<IEnumerable<MaintenanceTaskRoomModel>> GetMaintenanceTasks();
        Task<int> LinkMaintenanceTaskToInventoryItem(LinkInventoryToMaintenanceModel link);
        Task<IEnumerable<MaintenanceTask>> GetMaintenanceTaskByRoomId(int id);
        Task<IEnumerable<MaintenanceTask>> GetMaintenanceTaskByInventoryId(int id);
        Task<MaintenanceTask> GetMaintenanceTaskById(int id);
        Task<int> UpdateMaintenanceTask(MaintenanceTask maintenanceTask);
        Task<int> AddMaintenanceTask(MaintenanceTask maintenanceTask);
        Task<int> DeleteMaintenanceTask(int id);
        #endregion

        #region Maintenance Task Type
        Task<IEnumerable<MaintenanceTaskType>> GetMaintenanceTaskTypes();
        Task<MaintenanceTaskType> GetMaintenanceTaskTypeById(int id);
        Task<int> UpdateMaintenanceTaskType(MaintenanceTaskType maintenanceTaskType);
        Task<int> AddMaintenanceTaskType(MaintenanceTaskType maintenanceTaskType);
        Task<int> DeleteMaintenanceTaskType(MaintenanceTaskType maintenanceTaskType);
        #endregion

        #region Room
        Task<ICollection<Room>> GetRooms();
        Task<Room> GetRoomById(int id);
        Task<int> UpdateRoom(Room Room);
        Task<int> AddRoom(Room Room);
        Task<int> DeleteRoom(Room Room);
        #endregion

        #region Room Types
        Task<ICollection<RoomType>> GetRoomTypes();
        Task<RoomType> GetRoomTypeById(int id);
        Task<int> UpdateRoomType(RoomType RoomType);
        Task<int> AddRoomType(RoomType RoomType);
        Task<int> DeleteRoomType(RoomType RoomType);
        #endregion
    }
}
