using Microsoft.AspNetCore.Mvc;
using System.Web;
using UpKeep.Services.Interfaces;

namespace UpKeep.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class QRCodeController : ControllerBase
    {
        private readonly ILogger<QRCodeController> _logger;
        private readonly IQRCodeService _qrCodeService;

        public QRCodeController(ILogger<QRCodeController> logger, IQRCodeService qRCodeService)
        {
            _logger = logger;
            _qrCodeService = qRCodeService;
        }


        [HttpPost, ActionName("GenerateQRCodeForInventoryItem")]
        public async Task<IActionResult> GenerateQRCodeForInventoryItem(string link)
        {
            var decodedLink = HttpUtility.UrlDecode(link); 
            return Ok( File(await _qrCodeService.GenerateQRCodeForInventoryItem(decodedLink), "image/png"));
        }
    }

}
