using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class InventoryItemTypeController : ControllerBase
    {
        private readonly ILogger<InventoryItemTypeController> _logger;
        private readonly IInventoryItemTypeService _inventoryItemType;

        public InventoryItemTypeController(ILogger<InventoryItemTypeController> logger, IInventoryItemTypeService inventoryItemTypeService)
        {
            _logger = logger;
            _inventoryItemType = inventoryItemTypeService;
        }

        [HttpGet, ActionName("GetInventoryItemTypes")]
        [ProducesResponseType(typeof(IEnumerable<InventoryItemTypeModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetInventoryItemTypes()
        {
            return Ok(await _inventoryItemType.GetInventoryItemTypes());
        }

        [HttpGet, ActionName("GetInventoryItemTypeById")]
        [ProducesResponseType(typeof(InventoryItemTypeModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetInventoryItemTypeById(int id)
        {
            return Ok(await _inventoryItemType.GetInventoryItemTypeById(id));
        }

        [HttpPost, ActionName("UpdateInventoryItemType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            return Ok(await _inventoryItemType.UpdateInventoryItemType(InventoryItemTypeModel));
        }

        [HttpPost, ActionName("AddInventoryItemType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            return Ok(await _inventoryItemType.AddInventoryItemType(InventoryItemTypeModel));
        }

        [HttpPost, ActionName("DeleteInventoryItemType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteInventoryItemType(InventoryItemTypeModel InventoryItemTypeModel)
        {
            return Ok(await _inventoryItemType.DeleteInventoryItemType(InventoryItemTypeModel));
        }
    }
}
