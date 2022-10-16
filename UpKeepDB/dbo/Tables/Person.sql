CREATE TABLE [dbo].[Person] (
    [PersonId]    INT           IDENTITY (1, 1) NOT NULL,
    [FirstName]   VARCHAR (255) NULL,
    [LastName]    VARCHAR (255) NULL,
    [PhoneNumber] VARCHAR (255) NULL,
    PRIMARY KEY CLUSTERED ([PersonId] ASC)
);

