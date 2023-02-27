namespace UpKeep.Models
{
    public class RoomModel
    {
        public RoomModel()
        {
            //InventoryItems = new HashSet<InventoryItemModel>();
        }

        public int RoomId { get; set; }
        public string? RoomLocation { get; set; }
        public int RoomTypeId { get; set; }
        public string? RoomNumber { get; set; }

        public virtual RoomTypeModel RoomTypeModel { get; set; } = null!;
        //public virtual ICollection<InventoryItemModel> InventoryItems { get; set; }
    }
}
