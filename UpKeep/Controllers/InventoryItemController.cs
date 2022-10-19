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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            throw new NotImplementedException();
        }
    }
}
