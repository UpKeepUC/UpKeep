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

        public virtual RoomTypeModel RoomType { get; set; } = null!;
        //public virtual ICollection<InventoryItemModel> InventoryItems { get; set; }
    }
}
