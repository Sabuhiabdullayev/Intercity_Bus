using Bus_UI.Models.ContactUs;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Bus_UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ContactUsController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;
        private readonly string _apiContactUsPath;

        public ContactUsController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
            _apiContactUsPath = _configuration["ApiBusPath:ContachUsPath"];
        }

        public async Task<IActionResult> List()
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(_apiContactUsPath + "GetList/");
            if (response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var json = JsonConvert.DeserializeObject<List<ContactUsListView>>(jsonData);
                return View(json);
            }
            return View();
        }
        public async Task<IActionResult> Delete(int id)
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.DeleteAsync(_apiContactUsPath + "Delete/" + id);
            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction("List", "ContactUs", new { area = "Admin" });
            }
            return View();
        }
    }
}
