using UpKeep.Models;

namespace UpKeep.Services.Interfaces
{
    public interface IMaintenanceTaskTypeService
    {
        Task<IEnumerable<MaintenanceTaskTypeModel>> GetMaintenanceTaskTypes();
        Task<MaintenanceTaskTypeModel> GetMaintenanceTaskTypeById(int id);
        Task<int> UpdateMaintenanceTaskType(MaintenanceTaskTypeModel maintenanceTaskTypeModel);
        Task<int> AddMaintenanceTaskType(MaintenanceTaskTypeModel maintenanceTaskTypeModel);
        Task<int> DeleteMaintenanceTaskType(MaintenanceTaskTypeModel maintenanceTaskTypeModel);
    }
}
