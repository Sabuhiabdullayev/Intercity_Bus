using Bus_UI.Models.DeparturePrice;
using Bus_UI.Models.Passengers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Bus_UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class PassengerController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;
        private readonly string _apiDepartureUrl;
        private readonly string _apiPassengerUrl;

		public PassengerController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
		{
			_httpClientFactory = httpClientFactory;
			_configuration = configuration;
			_apiDepartureUrl = _configuration["ApiBusPath:DeparturePricePath"];
       _apiPassengerUrl=_configuration["ApiBusPath:PassengersPath"];
        }

		public IActionResult List()
        {
            return View();
        }
        public async Task<IActionResult> Search(string? FromWhere, string? ToWhere, string? DepartureDate, string? DepartureHour)
        {
            ViewBag.Date = DepartureDate;
            ViewBag.Hour = DepartureHour;
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(_apiPassengerUrl + "Search?" + "FromWhere=" + FromWhere + "&" + "ToWhere=" + ToWhere + "&" + "DepartureDate=" + DepartureDate + "&" + "DepartureHour=" + DepartureHour);
            if (response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var json = JsonConvert.DeserializeObject<List<PassengersListView>>(jsonData);
                return Json(json);
            }
            return View();
        }
        public async Task<IActionResult> GetId(int id)
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(_apiPassengerUrl + "GetById/" + id);
            if (response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var json = JsonConvert.DeserializeObject<PassengersListView>(jsonData);
                return View(json);
            }
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.DeleteAsync(_apiPassengerUrl + "Delete/" + id);
            if (response.IsSuccessStatusCode)
            {
                return Json(response);
            }
            return View();
        }
    }
}
