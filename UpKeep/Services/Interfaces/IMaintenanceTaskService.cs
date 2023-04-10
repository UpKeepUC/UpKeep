using UpKeep.Models;
using UpKeepData.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IMaintenanceTaskService
    {
        Task<IEnumerable<MaintenanceTaskRoomModel>> GetMaintenanceTasks();
        Task<MaintenanceTaskModel> GetMaintenanceTaskById(int id);
        Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTaskByRoomId(int id);
        Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTaskByInventoryId(int id);
        Task<int> UpdateMaintenanceTask(MaintenanceTaskAddOrUpdateModel maintenanceTask);
        Task<int> AddMaintenanceTask(MaintenanceTaskAddOrUpdateModel maintenanceTaskModel);
        Task<int> DeleteMaintenanceTask(MaintenanceTaskAddOrUpdateModel maintenanceTaskModel);
    }
}
