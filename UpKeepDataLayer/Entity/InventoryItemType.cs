using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class InventoryItemType
    {
        public InventoryItemType()
        {
            InventoryItems = new HashSet<InventoryItem>();
        }

        public int InventoryItemTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public virtual ICollection<InventoryItem> InventoryItems { get; set; }
    }
}
