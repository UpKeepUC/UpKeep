using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeMaintenanceTasks = new HashSet<EmployeeMaintenanceTask>();
        }

        public int EmployeeId { get; set; }
        public int UserId { get; set; }
        public int PersonId { get; set; }
        public string? JobTitle { get; set; }
        public string? JobDescription { get; set; }
        public DateTime? DateHired { get; set; }

        public virtual Person Person { get; set; } = null!;
        public virtual User User { get; set; } = null!;
        public virtual ICollection<EmployeeMaintenanceTask> EmployeeMaintenanceTasks { get; set; }
    }
}
