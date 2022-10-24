using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class Person
    {
        public Person()
        {
            Employees = new HashSet<Employee>();
        }

        public int PersonId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
