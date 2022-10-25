namespace UpKeep.Models
{
    public class InventoryItemModel
    {
        public InventoryItemModel()
        {
            //InventoryItemMaintenanceTasks = new HashSet<InventoryItemMaintenanceTask>();
        }

        public int InventoryItemId { get; set; }
        public int InventoryItemTypeId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public string? InventoryItemCost { get; set; }
        public int RoomId { get; set; }
        public string? QrcodeId { get; set; }

        public virtual InventoryItemTypeModel InventoryItemTypeModel { get; set; } = null!;
        //public virtual RoomModel Room { get; set; } = null!;
        //public virtual ICollection<InventoryItemMaintenanceTask> InventoryItemMaintenanceTasksModel { get; set; }
    }
}
