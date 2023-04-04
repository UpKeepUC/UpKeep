namespace UpKeep.Models
{
    public class MaintenanceTaskAddOrUpdateModel
    {
        public int MaintenanceTaskId { get; set; }
        public int MaintenanceTaskTypeId { get; set; }
        public DateTime? MaintenanceTaskDueDate { get; set; }
        public DateTime? MaintenanceTaskCompletedDate { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
}
