CREATE TABLE [dbo].[InventoryItemType] (
    [InventoryItemTypeId] INT           IDENTITY (1, 1) NOT NULL,
    [Name]                VARCHAR (200) NULL,
    [Description]         VARCHAR (200) NULL,
    CONSTRAINT [PK__Inventor__7B4C666E361CF395] PRIMARY KEY CLUSTERED ([InventoryItemTypeId] ASC)
);

