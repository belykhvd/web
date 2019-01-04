using Microsoft.AspNetCore.Mvc;

namespace WebPayment.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}