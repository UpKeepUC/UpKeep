using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class RoomTypeController : ControllerBase
    {
        private readonly ILogger<RoomTypeController> _logger;
        private readonly IRoomTypeService _roomTypeService;

        public RoomTypeController(ILogger<RoomTypeController> logger, IRoomTypeService RoomTypeService)
        {
            _logger = logger;
            _roomTypeService = RoomTypeService;
        }

        [HttpGet, ActionName("GetRoomTypes")]
        [ProducesResponseType(typeof(ICollection<RoomTypeModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetRoomTypes()
        {
            return Ok(await _roomTypeService.GetRoomTypes());
        }

        [HttpGet, ActionName("GetRoomTypeById")]
        [ProducesResponseType(typeof(RoomTypeModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetRoomTypeById(int id)
        {
            return Ok(await _roomTypeService.GetRoomTypeModelById(id));
        }

        [HttpPost, ActionName("UpdateRoomType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateRoomType(RoomTypeModel RoomTypeModel)
        {
            return Ok(await _roomTypeService.UpdateRoomType(RoomTypeModel));
        }

        [HttpPost, ActionName("AddRoomType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddRoomType(RoomTypeModel RoomTypeModel)
        {
            return Ok(await _roomTypeService.AddRoomType(RoomTypeModel));
        }

        [HttpPost, ActionName("DeleteRoomType")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteRoomType(RoomTypeModel RoomTypeModel)
        {
            return Ok(await _roomTypeService.DeleteRoomType(RoomTypeModel));
        }
    }
}
