USE [GrokMob]
GO

/****** Object:  Table [dbo].[MeetingComment]    Script Date: 08/23/2011 06:14:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MeetingComment](
	[Id] [uniqueidentifier] NOT NULL,
	[MeetingId] [uniqueidentifier] NOT NULL,
	[MemberHandle] [nvarchar](25) NOT NULL,
	[Comment] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
 CONSTRAINT [PK_MeetingComment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


