namespace UpKeep.Models
{
    public class InventoryItemTypeModel
    {
        public InventoryItemTypeModel()
        {
            //InventoryItems = new HashSet<InventoryItemModel>();
        }

        public int InventoryItemTypeId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        //public virtual ICollection<InventoryItemModel> InventoryItems { get; set; }
    }
}
