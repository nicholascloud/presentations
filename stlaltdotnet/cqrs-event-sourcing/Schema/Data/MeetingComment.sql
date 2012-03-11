use GrokMob;
go

delete from MeetingComment;
go

insert into MeetingComment (Id, MeetingId, MemberHandle, Comment, CreatedAt) values
('A26EE6AB-65AB-486D-A309-DBC924946856', 'F6209BA4-FB41-4A51-8692-CDC6662B97AC', 'Shelia', 'Can someone please send me a link VB.NET???', GETDATE()),
('E2F18F4A-0542-4113-91CA-621F402D1DD5', 'F6209BA4-FB41-4A51-8692-CDC6662B97AC', 'Rebecca', 'FROWNS AT SHELIA', GETDATE()),
('FB191F3E-B278-4A5D-8636-3AEAE46D34FF', '15926541-00BF-4266-8237-A0DC20B3DEEB', 'Walter', 'The .NET conference in December is almost sold out--register now while there is still a chance!', GETDATE()),
('45FC1C36-0354-4AE8-9F92-178BE41AE9D4', '15926541-00BF-4266-8237-A0DC20B3DEEB', 'Dave', 'why do recruiters spam me? anyone else have this problem', GETDATE()),
('F299FF8E-7AD5-4F68-A0F8-D9D35DABA591', '94C27EE7-7665-497D-BEAD-995E415E73B6', 'Sam', 'The discussion last night on NCQRS was pretty awesome, you guys rock!', GETDATE());
go