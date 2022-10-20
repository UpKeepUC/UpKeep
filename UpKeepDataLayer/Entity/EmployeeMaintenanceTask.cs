using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class EmployeeMaintenanceTask
    {
        public int EmployeeMaintenanceTaskId { get; set; }
        public int EmployeeId { get; set; }
        public int MaintenanceTaskId { get; set; }
        public DateTime DateLinked { get; set; }

        public virtual Employee Employee { get; set; } = null!;
        public virtual MaintenanceTask MaintenanceTask { get; set; } = null!;
    }
}
