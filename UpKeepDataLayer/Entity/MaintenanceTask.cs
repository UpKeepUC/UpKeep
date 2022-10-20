using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class MaintenanceTask
    {
        public MaintenanceTask()
        {
            EmployeeMaintenanceTasks = new HashSet<EmployeeMaintenanceTask>();
        }

        public int MaintenanceTaskId { get; set; }
        public int MaintenanceTaskTypeId { get; set; }
        public DateTime? MaintenanceTaskDueDate { get; set; }
        public DateTime? MaintenanceTaskCompletedDate { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public virtual MaintenanceTaskType MaintenanceTaskType { get; set; } = null!;
        public virtual ICollection<EmployeeMaintenanceTask> EmployeeMaintenanceTasks { get; set; }
    }
}
