using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Passengers
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string FromWhere { get; set; }
        public string ToWhere { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Price { get; set; }
        public string IdentityNumber { get; set; }
        public string Seat { get; set; }
        public string DepartureHour { get; set; }
        public string DepartureDate { get; set; }
        public string PostingDate { get; set; }
    }
}
