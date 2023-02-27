namespace UpKeep.Models
{
    public class RoomTypeModel
    {
        public RoomTypeModel()
        {
            //Rooms = new HashSet<RoomModel>();
        }

        public int RoomTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        //public virtual ICollection<RoomModel> Rooms { get; set; }
    }
}
