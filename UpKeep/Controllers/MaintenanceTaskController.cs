using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class MaintenanceTaskController : ControllerBase
    {
        private readonly ILogger<MaintenanceTaskController> _logger;
        private readonly IMaintenanceTaskService _maintenanceTaskService;

        public MaintenanceTaskController(ILogger<MaintenanceTaskController> logger, IMaintenanceTaskService maintenanceTaskService)
        {
            _logger = logger;
            _maintenanceTaskService = maintenanceTaskService;
        }

        [HttpGet, ActionName("GetMaintenanceTasks")]
        [ProducesResponseType(typeof(ICollection<MaintenanceTaskModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMaintenanceTasks()
        {
            return Ok(await _maintenanceTaskService.GetMaintenanceTasks());
        }

        [HttpGet, ActionName("GetMaintenanceTaskById")]
        [ProducesResponseType(typeof(MaintenanceTaskModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMaintenanceTaskById(int id)
        {
            return Ok(await _maintenanceTaskService.GetMaintenanceTaskById(id));
        }

        [HttpPost, ActionName("UpdateMaintenanceTask")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateMaintenanceTask(MaintenanceTaskModel MaintenanceTaskModel)
        {
            return Ok(await _maintenanceTaskService.UpdateMaintenanceTask(MaintenanceTaskModel));
        }

        [HttpPost, ActionName("AddMaintenanceTask")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddMaintenanceTask(MaintenanceTaskModel MaintenanceTaskModel)
        {
            return Ok(await _maintenanceTaskService.AddMaintenanceTask(MaintenanceTaskModel));
        }

        [HttpPost, ActionName("DeleteMaintenanceTask")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteMaintenanceTask(MaintenanceTaskModel MaintenanceTaskModel)
        {
            return Ok(await _maintenanceTaskService.DeleteMaintenanceTask(MaintenanceTaskModel));
        }
    }
}
