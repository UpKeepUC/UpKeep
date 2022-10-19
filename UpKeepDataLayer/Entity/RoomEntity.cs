using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpKeepData.Entity
{
    public class RoomEntity
    {
        public int RoomId { get; set; }
        public string? RoomLocation { get; set; }
        public int RoomTypeId { get; set; }

        public RoomTypeEntity? RoomType { get; set; }
    }

    public class RoomTypeEntity
    {
        public int RooomTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public ICollection<RoomEntity>? Rooms { get; set; }
    }

}
