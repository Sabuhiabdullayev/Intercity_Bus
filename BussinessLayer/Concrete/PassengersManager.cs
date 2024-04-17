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
    public class PassengersManager : IPassengersServices
    {
        private readonly IPassengersDal _passengersDal;

        public PassengersManager(IPassengersDal passengersDal)
        {
            _passengersDal = passengersDal;
        }

        public Passengers GetById(int? id)
        {
            return _passengersDal.TGetById(id);
        }

        public List<Passengers> GetList()
        {
            return _passengersDal.TGetList();
        }

        public void Insert(Passengers t)
        {
            _passengersDal.TInsert(t);
        }

        public void Remove(Passengers t)
        {
            _passengersDal.TDelete(t);
        }

        public void Update(Passengers t)
        {
            _passengersDal.TUpdate(t);
        }
    }
}
