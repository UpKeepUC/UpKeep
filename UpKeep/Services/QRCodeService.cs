using System.Net.Http.Headers;
using UpKeep.Services.Interfaces;

namespace UpKeep.Services
{
    public class QRCodeService : IQRCodeService
    {
        private HttpClient _defaultClient;
        private HttpClient _namedClient;
        private IConfiguration _configuration;

        public QRCodeService(IHttpClientFactory factory, IConfiguration configuration)
        {
            _defaultClient = factory.CreateClient(); // BaseAddress: null
            _namedClient = factory.CreateClient("qrCodeClient");
            _configuration = configuration; 
        }

        public async Task<byte[]> GenerateQRCodeForInventoryItem(string link)
        {
            var linkURI = new Uri(link);

            var URI = new Uri($"https://{_configuration.GetSection("QRCodeSecrets")["X-RapidAPI-Host"]}/qrcode/text");

            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = URI,
                Headers =
                {
                    { "X-RapidAPI-Key", _configuration.GetSection("QRCodeSecrets")["X-RapidAPI-Key"] },
                    { "X-RapidAPI-Host", _configuration.GetSection("QRCodeSecrets")["X-RapidAPI-Host"] },
                },
                Content = new StringContent("{" + $"\r\n    \"data\": \"{linkURI}\",\r\n" +        "\"style\": {\r\n        \"module\": {\r\n            \"color\": \"black\",\r\n            \"shape\": \"default\"\r\n        },\r\n        \"inner_eye\": {\r\n            \"shape\": \"default\"\r\n        },\r\n        \"outer_eye\": {\r\n            \"shape\": \"default\"\r\n        },\r\n        \"background\": {}\r\n    },\r\n    \"size\": {\r\n        \"width\": 200,\r\n        \"quiet_zone\": 4,\r\n        \"error_correction\": \"M\"\r\n    },\r\n    \"output\": {\r\n        \"filename\": \"qrcode\",\r\n        \"format\": \"png\"\r\n    }\r\n}")
                {
                    Headers =
                    {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                }
            };

            using var response = await _namedClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsByteArrayAsync();
        }
    }
}
