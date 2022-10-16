CREATE TABLE [dbo].[InventoryItemMaintenanceTask] (
    [InventoryItemMaintenanceTaskId] INT      IDENTITY (1, 1) NOT NULL,
    [InventoryItemId]                INT      NOT NULL,
    [MaintenanceTaskId]              INT      NOT NULL,
    [DateLinked]                     DATETIME NOT NULL,
    PRIMARY KEY CLUSTERED ([InventoryItemMaintenanceTaskId] ASC),
    FOREIGN KEY ([InventoryItemId]) REFERENCES [dbo].[InventoryItem] ([InventoryItemId])
);

