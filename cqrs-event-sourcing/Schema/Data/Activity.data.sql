DELETE FROM Activity;
GO

INSERT INTO Activity ([Id], [MemberHandle], [Kind], [Content], [CreatedAt]) VALUES
(NEWID(), 'Shelia', 'Comment', 'Can someone please send me a link VB.NET???', GETDATE()),
(NEWID(), 'Rebecca', 'Comment', 'FROWNS AT SHELIA', GETDATE()),
(NEWID(), 'Walter', 'Comment', 'The .NET conference in December is almost sold out--register now while there is still a chance!', GETDATE()),
(NEWID(), 'Dave', 'Comment', 'why do recruiters spam me? anyone else have this problem', GETDATE()),
(NEWID(), 'Sam', 'Comment', 'The discussion last night on NCQRS was pretty awesome, you guys rock!', GETDATE());
GO