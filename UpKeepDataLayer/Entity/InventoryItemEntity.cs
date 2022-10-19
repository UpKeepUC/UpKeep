using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpKeepData.Entity
{
    public class InventoryItemEntity
    {
        public int InventoryItemId { get; set; }
        public int InventoryItemTypeId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public string? InventoryItemCost { get; set; }
        public int RoomId { get; set; }
        public string? QRCodeId { get; set; }

        public InventoryItemTypeEntity? InventoryItemType{get;set;} 
        public RoomEntity? Room { get; set; }
    }

    public class InventoryItemTypeEntity
    {
        public int InventoryItemTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public ICollection<InventoryItemEntity>? InventoryItems { get; set; }
    }
}
