CREATE TABLE [dbo].[MaintenanceTask] (
    [MaintenanceTaskId]            INT           IDENTITY (1, 1) NOT NULL,
    [MaintenanceTaskTypeId]        INT           NOT NULL,
    [MaintenanceTaskDueDate]       DATETIME      NULL,
    [MaintenanceTaskCompletedDate] DATETIME      NULL,
    [Name]                         VARCHAR (255) NULL,
    [Description]                  VARCHAR (255) NULL,
    PRIMARY KEY CLUSTERED ([MaintenanceTaskId] ASC),
    FOREIGN KEY ([MaintenanceTaskTypeId]) REFERENCES [dbo].[MaintenanceTaskType] ([MaintenanceTaskTypeId])
);

