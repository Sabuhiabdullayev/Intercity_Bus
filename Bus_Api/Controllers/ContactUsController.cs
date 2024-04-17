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
    public class ContactUsController : ControllerBase
    {
        IContactUsServices _contactUsServices;

        public ContactUsController(IContactUsServices contactUsServices)
        {
            _contactUsServices = contactUsServices;
        }
        [HttpGet("GetList")]
        public IActionResult GetList()
        {
            var value= _contactUsServices.GetList();
            return Ok(value);
        }
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int? id)
        {
            var value = _contactUsServices.GetById(id);
            return Ok(value);
        }
        [HttpPost("Add")]
        public IActionResult Add(ContactUs contactUs)
        {
             _contactUsServices.Insert(contactUs);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(ContactUs contactUs)
        {
            _contactUsServices.Update(contactUs);
            return Ok();
        }
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var value = _contactUsServices.GetById(id);
            _contactUsServices.Remove(value);
            return Ok();
        }
        [HttpGet("Search")]
        public IActionResult Search(string? FullName, string? Email, string? PostingDate)
        {
            using (var c = new ApiContext())
            {
                var query = c.Passengers.AsQueryable();
                if (!string.IsNullOrEmpty(FullName))
                {
                    query = query.Where(x => x.FullName.Contains(FullName));
                }
                if (!string.IsNullOrEmpty(Email))
                {
                    query = query.Where(x => x.Email.Contains(Email));
                }
                if (!string.IsNullOrEmpty(PostingDate))
                {
                    query = query.Where(x => x.PostingDate.Contains(PostingDate));
                }
               
                return Ok(query.ToList());
            }
        }
        }
}
