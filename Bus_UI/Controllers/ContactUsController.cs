using Bus_UI.Models.ContactUs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace Bus_UI.Controllers
{
    [AllowAnonymous]
    public class ContactUsController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;
        string _apiContactUsPath;

		public ContactUsController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
		{
			_httpClientFactory = httpClientFactory;
			_configuration = configuration;
            _apiContactUsPath = _configuration["ApiBusPath:ContachUsPath"];
		}

		[HttpGet]
        public IActionResult Contact()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> ContactAdd(ContactUsAdd contact)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(contact);
            StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(_apiContactUsPath + "Add", content);
            if (response.IsSuccessStatusCode)
            {
                return Json(response);
            }
            return View();
        }
   
    }
}
