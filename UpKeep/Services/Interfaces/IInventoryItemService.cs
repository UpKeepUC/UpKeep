﻿using AutoMapper;
using UpKeep.Models;
using UpKeepData.Entity;

namespace UpKeep.Services.Interfaces
{
    public interface IInventoryItemService
    {
        Task<IEnumerable<InventoryItemModel>> GetInventoryItems();
        Task<InventoryItemModel> GetInventoryItemModelById(int id);
        Task<int> UpdateInventoryItem(InventoryItemModel inventoryItemModel);
        Task<int> AddInventoryItem(InventoryItemModel inventoryItemModel);
        Task<int> DeleteInventoryItem(InventoryItemModel inventoryItemModel);
  
    }
}