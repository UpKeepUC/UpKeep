CREATE TABLE [dbo].[Employee] (
    [EmployeeId]     INT           IDENTITY (1, 1) NOT NULL,
    [UserId]         INT           NOT NULL,
    [PersonId]       INT           NOT NULL,
    [JobTitle]       VARCHAR (255) NULL,
    [JobDescription] VARCHAR (255) NULL,
    [DateHired]      DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([EmployeeId] ASC),
    FOREIGN KEY ([PersonId]) REFERENCES [dbo].[Person] ([PersonId]),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId])
);

