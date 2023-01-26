using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class MaintenanceTaskTypeController : ControllerBase
    {
        private readonly ILogger<MaintenanceTaskTypeController> _logger;
        private readonly IMaintenanceTaskTypeService _MaintenanceTaskTypeService;

        public MaintenanceTaskTypeController(ILogger<MaintenanceTaskTypeController> logger, IMaintenanceTaskTypeService MaintenanceTaskTypeService)
        {
            _logger = logger;
            _MaintenanceTaskTypeService = MaintenanceTaskTypeService;
        }

        [HttpGet, ActionName("GetMaintenanceTaskTypes")]
        [ProducesResponseType(typeof(ICollection<MaintenanceTaskTypeModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMaintenanceTaskTypes()
        {
            return Ok(await _MaintenanceTaskTypeService.GetMaintenanceTaskTypes());
        }

        [HttpGet, ActionName("GetMaintenanceTaskTypeById")]
        [ProducesResponseType(typeof(MaintenanceTaskTypeModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMaintenanceTaskTypeById(int id)
        {
            return Ok(await _MaintenanceTaskTypeService.GetMaintenanceTaskTypeById(id));
        }

        [HttpPost, ActionName("UpdateMaintenanceTaskType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateMaintenanceTaskType(MaintenanceTaskTypeModel MaintenanceTaskTypeModel)
        {
            return Ok(await _MaintenanceTaskTypeService.UpdateMaintenanceTaskType(MaintenanceTaskTypeModel));
        }

        [HttpPost, ActionName("AddMaintenanceTaskType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddMaintenanceTaskType(MaintenanceTaskTypeModel MaintenanceTaskTypeModel)
        {
            return Ok(await _MaintenanceTaskTypeService.AddMaintenanceTaskType(MaintenanceTaskTypeModel));
        }

        [HttpPost, ActionName("DeleteMaintenanceTaskType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteMaintenanceTaskType(MaintenanceTaskTypeModel MaintenanceTaskTypeModel)
        {
            return Ok(await _MaintenanceTaskTypeService.DeleteMaintenanceTaskType(MaintenanceTaskTypeModel));
        }
    }
}
