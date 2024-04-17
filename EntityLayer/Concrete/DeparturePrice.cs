using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class DeparturePrice
    {
        [Key]
        public int Id { get; set; }
        public string FromWhere { get; set; }
        public string ToWhere { get; set; }
        public double Price { get; set; }
    }
}
