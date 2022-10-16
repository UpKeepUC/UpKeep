CREATE TABLE [dbo].[RoomType] (
    [RoomTypeId]  INT           IDENTITY (1, 1) NOT NULL,
    [Name]        VARCHAR (200) NULL,
    [Description] VARCHAR (255) NULL,
    CONSTRAINT [PK__RoomType__BCC89631B1587566] PRIMARY KEY CLUSTERED ([RoomTypeId] ASC)
);

