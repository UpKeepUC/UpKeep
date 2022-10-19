using Microsoft.AspNetCore.Mvc;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InventoryItemTypeController : ControllerBase
    {
        private readonly ILogger<InventoryItemTypeController> _logger;

        public InventoryItemTypeController(ILogger<InventoryItemTypeController> logger)
        {
            _logger = logger;
        }
    }
}
