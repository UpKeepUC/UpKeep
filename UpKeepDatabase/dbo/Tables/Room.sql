CREATE TABLE [dbo].[Room] (
    [RoomId]       INT           IDENTITY (1, 1) NOT NULL,
    [RoomLocation] VARCHAR (200) NULL,
    [RoomTypeId]   INT           NOT NULL,
    CONSTRAINT [PK__Room__32863939ABADE757] PRIMARY KEY CLUSTERED ([RoomId] ASC),
    CONSTRAINT [FK__Room__RoomTypeId__286302EC] FOREIGN KEY ([RoomTypeId]) REFERENCES [dbo].[RoomType] ([RoomTypeId])
);

