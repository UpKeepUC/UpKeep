using UpKeepData.Entity;

namespace UpKeepData.Models
{
    public class MaintenanceTaskRoomModel
    {

        public int MaintenanceTaskId { get; set; }
        public int MaintenanceTaskTypeId { get; set; }
        public DateTime? MaintenanceTaskDueDate { get; set; }
        public DateTime? MaintenanceTaskCompletedDate { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public virtual MaintenanceTaskType MaintenanceTaskType { get; set; } = null!;
        public virtual ICollection<MaintenanceTaskRoom> MaintenanceTaskRooms { get; set; } = null!;
    }
}
