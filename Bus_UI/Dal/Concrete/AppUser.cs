using Microsoft.AspNetCore.Identity;

namespace Bus_UI.Dal.Concrete
{
    public class AppUser:IdentityUser<int>
    {
        public string FullName { get; set; }
        public string Gender { get; set; }
        public string PostingDate { get; set; }
    }
}
