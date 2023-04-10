using UpKeepData.Entity;

namespace UpKeep.Models
{
    public class MaintenenceTaskRoom
    {

        public int RoomId { get; set; }
        public string? RoomLocation { get; set; }
        public int RoomTypeId { get; set; }
        public string? RoomNumber { get; set; }

        public virtual RoomTypeModel RoomType { get; set; } = null!;
    }
}
