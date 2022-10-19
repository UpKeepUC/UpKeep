using Microsoft.AspNetCore.Mvc;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MaintenanceTaskController : ControllerBase
    {
        private readonly ILogger<MaintenanceTaskController> _logger;

        public MaintenanceTaskController(ILogger<MaintenanceTaskController> logger)
        {
            _logger = logger;
        }
    }
}
