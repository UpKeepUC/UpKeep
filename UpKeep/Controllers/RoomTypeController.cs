using Microsoft.AspNetCore.Mvc;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomTypeController : ControllerBase
    {
        private readonly ILogger<RoomTypeController> _logger;

        public RoomTypeController(ILogger<RoomTypeController> logger)
        {
            _logger = logger;
        }
    }
}
