CREATE TABLE [dbo].[InventoryItem] (
    [InventoryItemId]     INT           IDENTITY (1, 1) NOT NULL,
    [InventoryItemTypeId] INT           NOT NULL,
    [PurchaseDate]        DATETIME      NULL,
    [InventoryItemCost]   VARCHAR (200) NULL,
    [RoomId]              INT           NOT NULL,
    [QRCodeId]            VARCHAR (200) NULL,
    CONSTRAINT [PK__Inventor__3BB2AC805BD98DB3] PRIMARY KEY CLUSTERED ([InventoryItemId] ASC),
    CONSTRAINT [FK__Inventory__Inven__2B3F6F97] FOREIGN KEY ([InventoryItemTypeId]) REFERENCES [dbo].[InventoryItemType] ([InventoryItemTypeId]),
    CONSTRAINT [FK__Inventory__RoomI__2C3393D0] FOREIGN KEY ([RoomId]) REFERENCES [dbo].[Room] ([RoomId])
);

