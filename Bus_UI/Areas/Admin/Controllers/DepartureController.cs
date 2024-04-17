using Bus_UI.Models.DeparturePrice;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace Bus_UI.Areas.Admin.Controllers
{
	[Area("Admin")]
	public class DepartureController : Controller
	{
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly IConfiguration _configuration;
		private readonly string _apiDepartureUrl;
		public DepartureController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
		{
			_httpClientFactory = httpClientFactory;
			_configuration = configuration;
			_apiDepartureUrl = _configuration["ApiBusPath:DeparturePricePath"];
		}
		[HttpGet]
		public async Task<IActionResult> List()
		{
			var client = _httpClientFactory.CreateClient();
			var response = await client.GetAsync(_apiDepartureUrl+"GetList");
			if (response.IsSuccessStatusCode)
			{
				var jsonData = await response.Content.ReadAsStringAsync();
				var json = JsonConvert.DeserializeObject<List<DeparturePriceView>>(jsonData);
				return View(json);
			}
			return View();
		}
        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(_apiDepartureUrl+ "GetById/" +id);
            if (response.IsSuccessStatusCode)
            {
				var jsonData = await response.Content.ReadAsStringAsync();
				var json = JsonConvert.DeserializeObject<DeparturePriceView>(jsonData);
				return View(json);
            }
			return View();
        }
		[HttpPost]
        public async Task<IActionResult> Update(DeparturePriceView model)
        {
            var client = _httpClientFactory.CreateClient();
			var json = JsonConvert.SerializeObject(model);
			StringContent content = new StringContent(json, Encoding.UTF8, "application/json");
            var response = await client.PutAsync(_apiDepartureUrl+ "Update",content);
            if (response.IsSuccessStatusCode)
            {
				return RedirectToAction("List", "Departure", new {area="Admin"});
            }
			return View();
        }
		[HttpGet]
		public async Task<IActionResult> CityUpdate(int id)
		{
			var client = _httpClientFactory.CreateClient();
			var response = await client.GetAsync(_apiDepartureUrl + "GetById/" + id);
			if (response.IsSuccessStatusCode)
			{
				var jsonData = await response.Content.ReadAsStringAsync();
				var json = JsonConvert.DeserializeObject<DeparturePriceView>(jsonData);
				return View(json);
			}
			return View();
		}
		[HttpPost]
		public async Task<IActionResult> CityUpdate(DeparturePriceView model)
		{
			var client = _httpClientFactory.CreateClient();
			var json = JsonConvert.SerializeObject(model);
			StringContent content = new StringContent(json, Encoding.UTF8, "application/json");
			var response = await client.PutAsync(_apiDepartureUrl + "Update", content);
			if (response.IsSuccessStatusCode)
			{
				return RedirectToAction("List", "Departure", new { area = "Admin" });
			}
			return View();
		}
		[HttpGet]
		public async Task<IActionResult> Delete(int id)
		{
			var client = _httpClientFactory.CreateClient();
			var response = await client.DeleteAsync(_apiDepartureUrl + "Delete/" + id);
			if (response.IsSuccessStatusCode)
			{
				return RedirectToAction("List", "Departure", new { area = "Admin" });
			}
			return View();
		}

		[HttpGet]
		public IActionResult Add()
        {
			return View();
        }

		[HttpPost]
		public async Task<IActionResult> Add(DeparturePriceAddView model)
		{
			var client = _httpClientFactory.CreateClient();
			var jsonData = JsonConvert.SerializeObject(model);
			StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");
			var response = await client.PostAsync(_apiDepartureUrl + "Add",content);
			if (response.IsSuccessStatusCode)
			{
				return RedirectToAction("List", "Departure", new { area = "Admin" });
			}
			return View();
		}
	}
}
