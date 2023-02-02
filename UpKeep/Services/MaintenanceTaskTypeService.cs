using AutoMapper;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeep.Services
{
    public class MaintenanceTaskTypeService : IMaintenanceTaskTypeService
    {
        private IUpKeepDBContext upKeepDBContext;
        private readonly IMapper mapper;

        public MaintenanceTaskTypeService(IUpKeepDBContext upKeepDBContext, IMapper mapper)
        {
            this.upKeepDBContext = upKeepDBContext;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<MaintenanceTaskTypeModel>> GetMaintenanceTaskTypes()
        {
            var result = await upKeepDBContext.GetMaintenanceTaskTypes();
            var models = mapper.Map<ICollection<MaintenanceTaskTypeModel>>(result);
            return models;
        }

        public async Task<MaintenanceTaskTypeModel> GetMaintenanceTaskTypeById(int id)
        {
            var result = await upKeepDBContext.GetMaintenanceTaskTypeById(id);
            var model = mapper.Map<MaintenanceTaskTypeModel>(result);
            return model;
        }

        public async Task<int> UpdateMaintenanceTaskType(MaintenanceTaskTypeModel maintenanceTaskTypeModel)
        {
            var model = mapper.Map<MaintenanceTaskType>(maintenanceTaskTypeModel);
            return await upKeepDBContext.UpdateMaintenanceTaskType(model);
        }

        public async Task<int> AddMaintenanceTaskType(MaintenanceTaskTypeModel maintenanceTaskTypeModel)
        {
            var model = mapper.Map<MaintenanceTaskType>(maintenanceTaskTypeModel);
            return await upKeepDBContext.AddMaintenanceTaskType(model);
        }

        public async Task<int> DeleteMaintenanceTaskType(MaintenanceTaskTypeModel maintenanceTaskTypeModel)
        {
            var model = mapper.Map<MaintenanceTaskType>(maintenanceTaskTypeModel);
            return await upKeepDBContext.DeleteMaintenanceTaskType(model);
        }
    }
}
