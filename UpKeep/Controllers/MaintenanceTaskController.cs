using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;
using UpKeepData.Models;

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
        [ProducesResponseType(typeof(ICollection<MaintenanceTaskRoomModel>), StatusCodes.Status200OK)]
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

        [HttpGet, ActionName("GetMaintenanceTaskByRoomId")]
        [ProducesResponseType(typeof(ICollection<MaintenanceTaskModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMaintenanceTaskByRoomId(int id)
        {
            return Ok(await _maintenanceTaskService.GetMaintenanceTaskByRoomId(id));
        }

        [HttpGet, ActionName("GetMaintenanceTaskByInventoryId")]
        [ProducesResponseType(typeof(ICollection<MaintenanceTaskModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMaintenanceTaskByInventoryId(int id)
        {
            return Ok(await _maintenanceTaskService.GetMaintenanceTaskByInventoryId(id));
        }

        [HttpPost, ActionName("UpdateMaintenanceTask")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateMaintenanceTask(MaintenanceTaskAddOrUpdateModel MaintenanceTaskModel)
        {
            return Ok(await _maintenanceTaskService.UpdateMaintenanceTask(MaintenanceTaskModel));
        }

        [HttpPost, ActionName("AddMaintenanceTask")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddMaintenanceTask(MaintenanceTaskAddOrUpdateModel MaintenanceTaskModel)
        {
            return Ok(await _maintenanceTaskService.AddMaintenanceTask(MaintenanceTaskModel));
        }

        [HttpPost, ActionName("DeleteMaintenanceTask")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteMaintenanceTask(MaintenanceTaskAddOrUpdateModel MaintenanceTaskModel)
        {
            return Ok(await _maintenanceTaskService.DeleteMaintenanceTask(MaintenanceTaskModel));
        }
    }
}
