using Bus_UI.Dal.Concrete;
using Bus_UI.Models.Login;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Bus_UI.Controllers
{
    [AllowAnonymous]
    public class LoginController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public LoginController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> SignUp(SignUpViewModel signUpView)
        {
            AppUser appUser = new AppUser()
            {
                FullName = signUpView.FullName,
                UserName = signUpView.UserName,
                PostingDate = DateTime.Parse(DateTime.Now.ToShortTimeString()).ToString()
            };
            if (signUpView.Password == signUpView.ConfigPassword)
            {
                var result = await _userManager.CreateAsync(appUser, signUpView.Password);
                if (result.Succeeded)
                {
                    return RedirectToAction("List", "Passenger", new { area = "Admin" });
                }
            };
            return View(signUpView);
        }
        [HttpGet]
        public IActionResult SignIn()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> SignIn(SignInViewModel model, string returnUrl)
        {
            var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, true);
            if (result.Succeeded)
            {
                if (!string.IsNullOrEmpty(returnUrl))
                {
                    return Redirect(returnUrl);
                }
                else
                {
                    return RedirectToAction("List", "Passenger", new { area = "Admin" });

                }
            }
            return View();
        }

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Search", "Passengers");
        }
    }
}
