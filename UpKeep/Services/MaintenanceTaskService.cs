using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;
using UpKeepData.Models;

namespace UpKeep.Services
{
    public class MaintenanceTaskService : IMaintenanceTaskService
    {
        private IUpKeepDBContext upKeepDBContext;
        private readonly IMapper mapper;

        public MaintenanceTaskService(IUpKeepDBContext upKeepDBContext, IMapper mapper)
        {
            this.upKeepDBContext = upKeepDBContext;
            this.mapper = mapper;
        }

        public async Task<int> LinkMaintenanceTaskToInventoryItem(LinkInventoryToMaintenanceModel link)
        {
            var result = await upKeepDBContext.LinkMaintenanceTaskToInventoryItem(link);
            return result;
        }

        public async Task<IEnumerable<MaintenanceTaskRoomModel>> GetMaintenanceTasks()
        {
            var result = await upKeepDBContext.GetMaintenanceTasks();
            return result;
        }

        public async Task<MaintenanceTaskModel> GetMaintenanceTaskById(int id)
        {
            var result = await upKeepDBContext.GetMaintenanceTaskById(id);
            var model = mapper.Map<MaintenanceTaskModel>(result);
            return model;
        }

        public async Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTaskByRoomId(int id)
        {
            var result = await upKeepDBContext.GetMaintenanceTaskByRoomId(id);
            var model = mapper.Map<ICollection<MaintenanceTaskModel>>(result);
            return model;
        }

        public async Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTaskByInventoryId(int id)
        {
            var result = await upKeepDBContext.GetMaintenanceTaskByInventoryId(id);
            var model = mapper.Map<ICollection<MaintenanceTaskModel>>(result);
            return model;
        }

        public async Task<int> UpdateMaintenanceTask(MaintenanceTaskAddOrUpdateModel maintenanceTaskModel)
        {
            var model = mapper.Map<MaintenanceTask>(maintenanceTaskModel);
            return await upKeepDBContext.UpdateMaintenanceTask(model);
        }

        public async Task<int> AddMaintenanceTask(MaintenanceTaskAddOrUpdateModel maintenanceTaskModel)
        {
            var model = mapper.Map<MaintenanceTask>(maintenanceTaskModel);
            return await upKeepDBContext.AddMaintenanceTask(model);
        }

        public async Task<int> DeleteMaintenanceTask(int id)
        {
            return await upKeepDBContext.DeleteMaintenanceTask(id);
        }
    }
}
