using Bus_UI.Models;
using Bus_UI.Models.Passengers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

namespace Bus_UI.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        public IActionResult Error()
        {
            return View();
        }

      
    }
}