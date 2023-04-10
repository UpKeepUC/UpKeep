using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpKeepData.Models
{
    public class LinkInventoryToMaintenanceModel
    {
        public List<int> InventoryItemIds { get; set; }
        public int MaintenanceTaskId { get; set; }
    }
}
