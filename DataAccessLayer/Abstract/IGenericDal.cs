using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Abstract
{
    public interface IGenericDal<T>
    {
        List<T> TGetList();
        void TInsert(T t);
        void TDelete(T t);
        void TUpdate(T t);
        T TGetById(int? Id);
    }
}
