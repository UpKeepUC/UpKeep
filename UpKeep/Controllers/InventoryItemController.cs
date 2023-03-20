using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class InventoryItemController : ControllerBase
    {
        private readonly ILogger<InventoryItemController> _logger;
        private readonly IInventoryItemService _inventoryItemService;

        public InventoryItemController(ILogger<InventoryItemController> logger, IInventoryItemService inventoryItemService)
        {
            _logger = logger;
            _inventoryItemService = inventoryItemService;
        }

        [HttpGet, ActionName("GetInventoryItems")]
        [ProducesResponseType(typeof(ICollection<InventoryItemModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetInventoryItems()
        {
            return Ok(await _inventoryItemService.GetInventoryItems());
        }

        [HttpGet, ActionName("GetInventoryItemById")]
        [ProducesResponseType(typeof(InventoryItemModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetInventoryItemById(int id)
        {
            return Ok(await _inventoryItemService.GetInventoryItemModelById(id));
        }

        [HttpGet, ActionName("GetInventoryItemByRoomId")]
        [ProducesResponseType(typeof(ICollection<InventoryItemModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetInventoryItemByRoomId(int id)
        {
            return Ok(await _inventoryItemService.GetInventoryItemModelByRoomId(id));
        }

        [HttpPost, ActionName("UpdateInventoryItem")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateInventoryItem(InventoryItemModel inventoryItemModel)
        {
            return Ok(await _inventoryItemService.UpdateInventoryItem(inventoryItemModel));
        }

        [HttpPost, ActionName("AddInventoryItem")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddInventoryItem(InventoryItemModel inventoryItemModel)
        {
            return Ok(await _inventoryItemService.AddInventoryItem(inventoryItemModel));
        }

        [HttpPost, ActionName("DeleteInventoryItem")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteInventoryItem(InventoryItemModel inventoryItemModel)
        {
            return Ok(await _inventoryItemService.DeleteInventoryItem(inventoryItemModel));
        }
    }
}
