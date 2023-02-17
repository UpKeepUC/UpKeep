namespace UpKeep.Services.Interfaces
{
    public interface IQRCodeService
    {
        Task<byte[]> GenerateQRCodeForInventoryItem();
    }
}
