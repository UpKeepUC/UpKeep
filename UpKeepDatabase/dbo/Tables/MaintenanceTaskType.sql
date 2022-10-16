CREATE TABLE [dbo].[MaintenanceTaskType] (
    [MaintenanceTaskTypeId] INT           IDENTITY (1, 1) NOT NULL,
    [Name]                  VARCHAR (255) NULL,
    [Description]           VARCHAR (255) NULL,
    PRIMARY KEY CLUSTERED ([MaintenanceTaskTypeId] ASC)
);

