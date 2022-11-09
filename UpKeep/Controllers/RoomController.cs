using Microsoft.AspNetCore.Mvc;
using UpKeep.Models;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class RoomController : ControllerBase
    {
        private readonly ILogger<RoomController> _logger;
        private readonly IRoomService _roomService;

        public RoomController(ILogger<RoomController> logger, IRoomService RoomService)
        {
            _logger = logger;
            _roomService = RoomService;
        }

        [HttpGet, ActionName("GetRooms")]
        [ProducesResponseType(typeof(ICollection<RoomModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetRooms()
        {
            return Ok(await _roomService.GetRooms());
        }

        [HttpGet, ActionName("GetRoomById")]
        [ProducesResponseType(typeof(RoomModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetRoomById(int id)
        {
            return Ok(await _roomService.GetRoomModelById(id));
        }

        [HttpPost, ActionName("UpdateRoom")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateRoom(RoomModel RoomModel)
        {
            return Ok(await _roomService.UpdateRoom(RoomModel));
        }

        [HttpPost, ActionName("AddRoom")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> AddRoom(RoomModel RoomModel)
        {
            return Ok(await _roomService.AddRoom(RoomModel));
        }

        [HttpPost, ActionName("DeleteRoom")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteRoom(RoomModel RoomModel)
        {
            return Ok(await _roomService.DeleteRoom(RoomModel));
        }
    }
}
