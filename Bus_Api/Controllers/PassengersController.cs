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
    public class PassengersController : ControllerBase
    {
        IPassengersServices _passengersServices;

        public PassengersController(IPassengersServices passengersServices)
        {
            _passengersServices = passengersServices;
        }
        [HttpGet("GetList")]
        public IActionResult GetList()
        {
            var value = _passengersServices.GetList();
            return Ok(value);
        }
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int? id)
        {
            var value = _passengersServices.GetById(id);
            return Ok(value);
        }
        [HttpPost("Add")]
        public IActionResult Add(Passengers Passengers)
        {
            _passengersServices.Insert(Passengers);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(Passengers Passengers)
        {
            _passengersServices.Update(Passengers);
            return Ok();
        }
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var value = _passengersServices.GetById(id);
            _passengersServices.Remove(value);
            return Ok();
        }
        [HttpGet("FindSearch")]
        public IActionResult FindSearch(string? FromWhere, string? ToWhere, string? DepartureDate, string? DepartureHour)
        {
            using(var c= new ApiContext())
            {

                var value = c.Passengers.Where(x => x.FromWhere == FromWhere & x.ToWhere == ToWhere & x.DepartureDate == DepartureDate & x.DepartureHour == DepartureHour);
              
               
                return Ok(value.ToList());
            }
        }
        [HttpGet("Search")]
        public IActionResult Search(string? FromWhere, string? ToWhere, string? DepartureDate, string? DepartureHour)
        {
            using(var c=new ApiContext())
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
                if (!string.IsNullOrEmpty(DepartureDate))
                {
                    query = query.Where(x => x.DepartureDate.Contains(DepartureDate));
                }
                if (!string.IsNullOrEmpty(DepartureHour))
                {
                    query = query.Where(x => x.DepartureHour.Contains(DepartureHour));
                }
                return Ok(query.ToList());
            }
        }
    }
}
