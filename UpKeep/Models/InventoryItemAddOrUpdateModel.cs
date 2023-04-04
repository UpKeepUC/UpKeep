namespace UpKeep.Models
{
    public class InventoryItemAddOrUpdateModel
    {
        public int InventoryItemId { get; set; }
        public int InventoryItemTypeId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public string? InventoryItemCost { get; set; }
        public int RoomId { get; set; }
        public string? QrcodeId { get; set; }
    }
}
