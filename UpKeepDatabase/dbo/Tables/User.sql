﻿CREATE TABLE [dbo].[User] (
    [UserId]   INT           IDENTITY (1, 1) NOT NULL,
    [Username] VARCHAR (100) NOT NULL,
    [Email]    VARCHAR (100) NOT NULL,
    [Password] VARCHAR (100) NOT NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC)
);

