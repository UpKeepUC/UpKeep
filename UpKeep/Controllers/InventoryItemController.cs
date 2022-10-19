using Microsoft.AspNetCore.Mvc;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InventoryItemController : ControllerBase
    {
        private readonly ILogger<InventoryItemController> _logger;

        public InventoryItemController(ILogger<InventoryItemController> logger)
        {
            _logger = logger;
        }
    }
}
