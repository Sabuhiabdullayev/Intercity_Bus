using Bus_UI.Models.DeparturePrice;
using Bus_UI.Models.Passengers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace Bus_UI.Controllers
{
    [AllowAnonymous]
    public class PassengersController : Controller
    {
       private readonly IHttpClientFactory _httpClientFactory;
       private readonly IConfiguration _configuration;
        private readonly string _apiUrl;
        private readonly string _apiDepartureUrl;

        public PassengersController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
            _apiUrl = _configuration["ApiBusPath:PassengersPath"];
            _apiDepartureUrl = _configuration["ApiBusPath:DeparturePricePath"];
        }
        [Route("{controller=Home}/{action=Index}/{FromWhere?}")]
        public async Task<IActionResult> Search(string? FromWhere,string? ToWhere, string? DepartureDate, string? DepartureHour)
        {
            ViewBag.Date = DepartureDate;
            ViewBag.Hour = DepartureHour;
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(_apiDepartureUrl + "FindSearch?" + "FromWhere=" + FromWhere + "&" + "ToWhere=" + ToWhere);
            if (response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var json = JsonConvert.DeserializeObject<DeparturePriceView>(jsonData);
                return View(json);
            }
            return View();
        }
 [HttpGet]
        public async Task<IActionResult> AllList(string FromWhere, string ToWhere, string DepartureDate, string DepartureHour)
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(_apiUrl + "FindSearch?" + "FromWhere=" + FromWhere + "&" + "ToWhere=" + ToWhere + "&" + "DepartureDate=" + DepartureDate + "&" + "DepartureHour=" + DepartureHour);
            if (response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var json = JsonConvert.DeserializeObject<List<PassengersListView>>(jsonData);
                return Json(json);
            }
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> ByATicket(PassengersBuyATicked buyATicked)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(buyATicked);
            StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(_apiUrl+"Add", content);
            if (response.IsSuccessStatusCode)
            {
                return Json(response);
            }
            return View();

        }
    }
}
