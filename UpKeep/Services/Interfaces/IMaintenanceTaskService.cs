using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IMaintenanceTaskService
    {
        Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTasks();
        Task<MaintenanceTaskModel> GetMaintenanceTaskById(int id);
        Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTaskByRoomId(int id);
        Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTaskByInventoryId(int id);
        Task<int> UpdateMaintenanceTask(MaintenanceTaskModel maintenanceTask);
        Task<int> AddMaintenanceTask(MaintenanceTaskModel maintenanceTaskModel);
        Task<int> DeleteMaintenanceTask(MaintenanceTaskModel maintenanceTaskModel);
    }
}
