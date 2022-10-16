CREATE TABLE [dbo].[EmployeeMaintenanceTask] (
    [EmployeeMaintenanceTaskId] INT      IDENTITY (1, 1) NOT NULL,
    [EmployeeId]                INT      NOT NULL,
    [MaintenanceTaskId]         INT      NOT NULL,
    [DateLinked]                DATETIME NOT NULL,
    PRIMARY KEY CLUSTERED ([EmployeeMaintenanceTaskId] ASC),
    FOREIGN KEY ([EmployeeId]) REFERENCES [dbo].[Employee] ([EmployeeId]),
    FOREIGN KEY ([MaintenanceTaskId]) REFERENCES [dbo].[MaintenanceTask] ([MaintenanceTaskId])
);

