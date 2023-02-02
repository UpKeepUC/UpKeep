using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

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

        public async Task<IEnumerable<MaintenanceTaskModel>> GetMaintenanceTasks()
        {
            var result = await upKeepDBContext.GetMaintenanceTasks();
            var models = mapper.Map<ICollection<MaintenanceTaskModel>>(result);
            return models;
        }

        public async Task<MaintenanceTaskModel> GetMaintenanceTaskById(int id)
        {
            var result = await upKeepDBContext.GetMaintenanceTaskById(id);
            var model = mapper.Map<MaintenanceTaskModel>(result);
            return model;
        }

        public async Task<int> UpdateMaintenanceTask(MaintenanceTaskModel maintenanceTaskModel)
        {
            var model = mapper.Map<MaintenanceTask>(maintenanceTaskModel);
            return await upKeepDBContext.UpdateMaintenanceTask(model);
        }

        public async Task<int> AddMaintenanceTask(MaintenanceTaskModel maintenanceTaskModel)
        {
            var model = mapper.Map<MaintenanceTask>(maintenanceTaskModel);
            return await upKeepDBContext.AddMaintenanceTask(model);
        }

        public async Task<int> DeleteMaintenanceTask(MaintenanceTaskModel maintenanceTaskModel)
        {
            var model = mapper.Map<MaintenanceTask>(maintenanceTaskModel);
            return await upKeepDBContext.DeleteMaintenanceTask(model);
        }
    }
}
