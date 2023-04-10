using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpKeepData.Entity;

namespace UpKeepData.Models
{
    public class MaintenanceTaskRoom
    {
        public MaintenanceTaskRoom()
        {
            //InventoryItems = new HashSet<InventoryItem>();
        }

        public int RoomId { get; set; }
        public string? RoomLocation { get; set; }
        public int RoomTypeId { get; set; }
        public string? RoomNumber { get; set; }

        public virtual RoomType RoomType { get; set; } = null!;
    }
}
