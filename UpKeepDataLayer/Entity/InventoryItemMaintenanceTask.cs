using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class InventoryItemMaintenanceTask
    {
        public int InventoryItemMaintenanceTaskId { get; set; }
        public int InventoryItemId { get; set; }
        public int MaintenanceTaskId { get; set; }
        public DateTime DateLinked { get; set; }

        public virtual InventoryItem InventoryItem { get; set; } = null!;
    }
}
