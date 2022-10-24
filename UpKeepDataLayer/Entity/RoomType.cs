using System;
using System.Collections.Generic;

namespace UpKeepData.Entity
{
    public partial class RoomType
    {
        public RoomType()
        {
            Rooms = new HashSet<Room>();
        }

        public int RoomTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public virtual ICollection<Room> Rooms { get; set; }
    }
}
