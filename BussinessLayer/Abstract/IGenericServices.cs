using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLayer.Abstract
{
    public interface IGenericServices<T>
    {
        List<T> GetList();
        void Insert(T t);
        void Remove(T t);
        void Update(T t);
        T GetById(int? id);
    }
}
