using DataAccessLayer.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer.Concrete;

namespace DataAccessLayer.Repositories
{
    public class GenericRepository<T> : IGenericDal<T> where T : class
    {
        public void TDelete(T t)
        {
            using(var context=new ApiContext())
            {
                context.Remove(t);
                context.SaveChanges();
            }
        }

        public T TGetById(int? Id)
        {
            using (var context = new ApiContext())
            {
               return context.Set<T>().Find(Id);
            }
        }

        public List<T> TGetList()
        {
            using (var context = new ApiContext())
            {
                return context.Set<T>().ToList();
            }
        }

        public void TInsert(T t)
        {
            using (var context = new ApiContext())
            {
                context.Add(t);
                context.SaveChanges();
            }
        }

        public void TUpdate(T t)
        {
            using (var context = new ApiContext())
            {
                context.Update(t);
                context.SaveChanges();
            }
        }
    }
}
