using UpKeepData.Entity;

namespace UpKeep.Models
{
    public class MaintenanceTaskTypeModel
    {
        public MaintenanceTaskTypeModel()
        {
            //MaintenanceTasks = new HashSet<MaintenanceTask>();
        }

        public int MaintenanceTaskTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        //public virtual ICollection<MaintenanceTaskModel> MaintenanceTasks { get; set; }
    }
}
