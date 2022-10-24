using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class MaintenanceTaskType
    {
        public MaintenanceTaskType()
        {
            MaintenanceTasks = new HashSet<MaintenanceTask>();
        }

        public int MaintenanceTaskTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public virtual ICollection<MaintenanceTask> MaintenanceTasks { get; set; }
    }
}
