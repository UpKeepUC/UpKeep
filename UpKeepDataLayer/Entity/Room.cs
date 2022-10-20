using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class Room
    {
        public Room()
        {
            InventoryItems = new HashSet<InventoryItem>();
        }

        public int RoomId { get; set; }
        public string? RoomLocation { get; set; }
        public int RoomTypeId { get; set; }

        public virtual RoomType RoomType { get; set; } = null!;
        public virtual ICollection<InventoryItem> InventoryItems { get; set; }
    }
}
