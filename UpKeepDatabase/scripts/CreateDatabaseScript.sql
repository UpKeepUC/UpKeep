﻿USE [master]
GO
/****** Object:  Database [UpKeepDB]    Script Date: 10/15/2022 8:15:42 PM ******/
CREATE DATABASE [UpKeepDB]
 CONTAINMENT = NONE
GO
ALTER DATABASE [UpKeepDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [UpKeepDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [UpKeepDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [UpKeepDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [UpKeepDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [UpKeepDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [UpKeepDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [UpKeepDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [UpKeepDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [UpKeepDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [UpKeepDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [UpKeepDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [UpKeepDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [UpKeepDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [UpKeepDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [UpKeepDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [UpKeepDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [UpKeepDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [UpKeepDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [UpKeepDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [UpKeepDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [UpKeepDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [UpKeepDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [UpKeepDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [UpKeepDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [UpKeepDB] SET  MULTI_USER 
GO
ALTER DATABASE [UpKeepDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [UpKeepDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [UpKeepDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [UpKeepDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [UpKeepDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [UpKeepDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [UpKeepDB] SET QUERY_STORE = OFF
GO
USE [UpKeepDB]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PersonId] [int] NOT NULL,
	[JobTitle] [varchar](255) NULL,
	[JobDescription] [varchar](255) NULL,
	[DateHired] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeMaintenanceTask]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeMaintenanceTask](
	[EmployeeMaintenanceTaskId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[MaintenanceTaskId] [int] NOT NULL,
	[DateLinked] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[EmployeeMaintenanceTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryItem]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryItem](
	[InventoryItemId] [int] IDENTITY(1,1) NOT NULL,
	[InventoryItemTypeId] [int] NOT NULL,
	[PurchaseDate] [datetime] NULL,
	[InventoryItemCost] [varchar](200) NULL,
	[RoomId] [int] NOT NULL,
	[QRCodeId] [varchar](200) NULL,
 CONSTRAINT [PK__Inventor__3BB2AC805BD98DB3] PRIMARY KEY CLUSTERED 
(
	[InventoryItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryItemMaintenanceTask]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryItemMaintenanceTask](
	[InventoryItemMaintenanceTaskId] [int] IDENTITY(1,1) NOT NULL,
	[InventoryItemId] [int] NOT NULL,
	[MaintenanceTaskId] [int] NOT NULL,
	[DateLinked] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[InventoryItemMaintenanceTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventoryItemType]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventoryItemType](
	[InventoryItemTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](200) NULL,
 CONSTRAINT [PK__Inventor__7B4C666E361CF395] PRIMARY KEY CLUSTERED 
(
	[InventoryItemTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MaintenanceTask]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceTask](
	[MaintenanceTaskId] [int] IDENTITY(1,1) NOT NULL,
	[MaintenanceTaskTypeId] [int] NOT NULL,
	[MaintenanceTaskDueDate] [datetime] NULL,
	[MaintenanceTaskCompletedDate] [datetime] NULL,
	[Name] [varchar](255) NULL,
	[Description] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[MaintenanceTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MaintenanceTaskType]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceTaskType](
	[MaintenanceTaskTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NULL,
	[Description] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[MaintenanceTaskTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Person]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Person](
	[PersonId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](255) NULL,
	[LastName] [varchar](255) NULL,
	[PhoneNumber] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[PersonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Room]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Room](
	[RoomId] [int] IDENTITY(1,1) NOT NULL,
	[RoomLocation] [varchar](200) NULL,
	[RoomTypeId] [int] NOT NULL,
	[RoomNumber] [nvarchar(50)] NOT NULL,
 CONSTRAINT [PK__Room__32863939ABADE757] PRIMARY KEY CLUSTERED 
(
	[RoomId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RoomType]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoomType](
	[RoomTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](255) NULL,
 CONSTRAINT [PK__RoomType__BCC89631B1587566] PRIMARY KEY CLUSTERED 
(
	[RoomTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 10/15/2022 8:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](100) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Password] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD FOREIGN KEY([PersonId])
REFERENCES [dbo].[Person] ([PersonId])
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[EmployeeMaintenanceTask]  WITH CHECK ADD FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[EmployeeMaintenanceTask]  WITH CHECK ADD FOREIGN KEY([MaintenanceTaskId])
REFERENCES [dbo].[MaintenanceTask] ([MaintenanceTaskId])
GO
ALTER TABLE [dbo].[InventoryItem]  WITH CHECK ADD  CONSTRAINT [FK__Inventory__Inven__2B3F6F97] FOREIGN KEY([InventoryItemTypeId])
REFERENCES [dbo].[InventoryItemType] ([InventoryItemTypeId])
GO
ALTER TABLE [dbo].[InventoryItem] CHECK CONSTRAINT [FK__Inventory__Inven__2B3F6F97]
GO
ALTER TABLE [dbo].[InventoryItem]  WITH CHECK ADD  CONSTRAINT [FK__Inventory__RoomI__2C3393D0] FOREIGN KEY([RoomId])
REFERENCES [dbo].[Room] ([RoomId])
GO
ALTER TABLE [dbo].[InventoryItem] CHECK CONSTRAINT [FK__Inventory__RoomI__2C3393D0]
GO
ALTER TABLE [dbo].[InventoryItemMaintenanceTask]  WITH CHECK ADD FOREIGN KEY([InventoryItemId])
REFERENCES [dbo].[InventoryItem] ([InventoryItemId])
GO
ALTER TABLE [dbo].[MaintenanceTask]  WITH CHECK ADD FOREIGN KEY([MaintenanceTaskTypeId])
REFERENCES [dbo].[MaintenanceTaskType] ([MaintenanceTaskTypeId])
GO
ALTER TABLE [dbo].[Room]  WITH CHECK ADD  CONSTRAINT [FK__Room__RoomTypeId__286302EC] FOREIGN KEY([RoomTypeId])
REFERENCES [dbo].[RoomType] ([RoomTypeId])
GO
ALTER TABLE [dbo].[Room] CHECK CONSTRAINT [FK__Room__RoomTypeId__286302EC]
GO
USE [master]
GO
ALTER DATABASE [UpKeepDB] SET  READ_WRITE 
GO
