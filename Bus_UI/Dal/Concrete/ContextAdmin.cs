using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bus_UI.Dal.Concrete
{
    public class ContextAdmin:IdentityDbContext<AppUser,AppRole,int>
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=ADMIN-ПК; Database=Bus; Integrated security=true;");
        }
    }
}
