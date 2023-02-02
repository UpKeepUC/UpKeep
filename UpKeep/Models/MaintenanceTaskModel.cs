using UpKeepData.Entity;

namespace UpKeep.Models
{
    public class MaintenanceTaskModel
    {
        public MaintenanceTaskModel()
        {
            //EmployeeMaintenanceTasks = new HashSet<EmployeeMaintenanceTask>();
        }

        public int MaintenanceTaskId { get; set; }
        public int MaintenanceTaskTypeId { get; set; }
        public DateTime? MaintenanceTaskDueDate { get; set; }
        public DateTime? MaintenanceTaskCompletedDate { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public virtual MaintenanceTaskTypeModel MaintenanceTaskTypeModel { get; set; } = null!;
        //public virtual ICollection<EmployeeMaintenanceTask> EmployeeMaintenanceTasks { get; set; }
    }
}
