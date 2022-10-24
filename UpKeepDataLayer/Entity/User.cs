using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class User
    {
        public User()
        {
            Employees = new HashSet<Employee>();
        }

        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
