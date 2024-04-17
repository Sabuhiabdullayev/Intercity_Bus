using BussinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLayer.Concrete
{
    public class ContactUsManager : IContactUsServices
    {
        private readonly IContactUsDal _contactUsDal;

        public ContactUsManager(IContactUsDal contactUsDal)
        {
            _contactUsDal = contactUsDal;
        }

        public ContactUs GetById(int? id)
        {
           return _contactUsDal.TGetById(id);
        }

        public List<ContactUs> GetList()
        {
            return _contactUsDal.TGetList();
        }

        public void Insert(ContactUs t)
        {
            _contactUsDal.TInsert(t);
        }

        public void Remove(ContactUs t)
        {
            _contactUsDal.TDelete(t);
        }

        public void Update(ContactUs t)
        {
            _contactUsDal.TUpdate(t);
        }
    }
}
