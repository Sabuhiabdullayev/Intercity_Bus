using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Concrete
{
    public class ApiContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=ADMIN-ПК; Database=BusApi; Integrated security=true;");
        }

        public DbSet<ContactUs> ContactUs { get; set; }
        public DbSet<DeparturePrice> DeparturePrices { get; set; }
        public DbSet<Passengers> Passengers { get; set; }
    }
}
