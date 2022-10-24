using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class InventoryItem
    {
        public InventoryItem()
        {
            InventoryItemMaintenanceTasks = new HashSet<InventoryItemMaintenanceTask>();
        }

        public int InventoryItemId { get; set; }
        public int InventoryItemTypeId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public string? InventoryItemCost { get; set; }
        public int RoomId { get; set; }
        public string? QrcodeId { get; set; }

        public virtual InventoryItemType InventoryItemType { get; set; } = null!;
        public virtual Room Room { get; set; } = null!;
        public virtual ICollection<InventoryItemMaintenanceTask> InventoryItemMaintenanceTasks { get; set; }
    }
}
