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
    public class DeparturePriceManager : IDeparturePriceServices
    {
        private readonly IDeparturePriceDal _departurePriceDal;

        public DeparturePriceManager(IDeparturePriceDal departurePriceDal)
        {
            _departurePriceDal = departurePriceDal;
        }

        public DeparturePrice GetById(int? id)
        {
            return _departurePriceDal.TGetById(id);
        }

        public List<DeparturePrice> GetList()
        {
            return _departurePriceDal.TGetList();
        }

        public void Insert(DeparturePrice t)
        {
            _departurePriceDal.TInsert(t);
        }

        public void Remove(DeparturePrice t)
        {
            _departurePriceDal.TDelete(t);
        }

        public void Update(DeparturePrice t)
        {
            _departurePriceDal.TUpdate(t);
        }
    }
}
