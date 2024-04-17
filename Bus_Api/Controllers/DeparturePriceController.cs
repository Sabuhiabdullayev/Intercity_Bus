using BussinessLayer.Abstract;
using DataAccessLayer.Concrete;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bus_Api.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class DeparturePriceController : ControllerBase
    {
        IDeparturePriceServices _departurePriceServices;

        public DeparturePriceController(IDeparturePriceServices departurePriceServices)
        {
            _departurePriceServices = departurePriceServices;
        }
        [HttpGet("GetList")]
        public IActionResult GetList()
        {
            var value = _departurePriceServices.GetList();
            return Ok(value);
        }
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int? id)
        {
            var value = _departurePriceServices.GetById(id);
            return Ok(value);
        }
        [HttpPost("Add")]
        public IActionResult Add(DeparturePrice DeparturePrice)
        {
            _departurePriceServices.Insert(DeparturePrice);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(DeparturePrice DeparturePrice)
        {
            _departurePriceServices.Update(DeparturePrice);
            return Ok();
        }
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var value = _departurePriceServices.GetById(id);
            _departurePriceServices.Remove(value);
            return Ok();
        }
        [HttpGet("FindSearch")]
        public IActionResult FindSearch(string? FromWhere, string? ToWhere)
        {
            using (var c = new ApiContext())
            {

                var value = c.DeparturePrices.FirstOrDefault(x => x.FromWhere == FromWhere & x.ToWhere == ToWhere);


                return Ok(value);
            }
        }
        [HttpGet("Search")]
        public IActionResult Search(string? FromWhere, string? ToWhere)
        {
            using (var c = new ApiContext())
            {
                var query = c.Passengers.AsQueryable();
                if (!string.IsNullOrEmpty(FromWhere))
                {
                    query = query.Where(x => x.FromWhere.Contains(FromWhere));
                }
                if (!string.IsNullOrEmpty(ToWhere))
                {
                    query = query.Where(x => x.ToWhere.Contains(ToWhere));
                }

                return Ok(query.ToList());
             }
            }
        }
}
