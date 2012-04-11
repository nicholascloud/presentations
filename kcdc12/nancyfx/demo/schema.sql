use master;
go

if exists(select * from sys.databases where name = 'HamstringFX')
  drop database HamstringFX;
go

create database HamstringFX;
go

use HamstringFX;
go

if object_id('Members') > 0
  drop table Members;
go

create table Members (
  Id uniqueidentifier not null primary key nonclustered,
  Handle nvarchar(100) not null,
  PasswordHash nvarchar(100) not null
);
go

if object_id('Privileges') > 0
  drop table Privileges;
go

create table Privileges (
  Id uniqueidentifier not null primary key nonclustered,
  MemberId uniqueidentifier not null,
  Claim nvarchar(100) not null
  foreign key (MemberId) references Members(Id)
);
go

if object_id('Routes') > 0
  drop table Route;
go

create table Routes (
  Id uniqueidentifier not null primary key nonclustered,
  Name nvarchar(100) not null,
  Distance decimal(10,2) not null
);
go

if object_id('Runs') > 0
  drop table Rns;
go

create table Runs (
  Id uniqueidentifier not null primary key nonclustered,
  MemberId uniqueidentifier not null,
  RouteId uniqueidentifier not null,
  ScheduledAt date not null,
  Duration varchar(20) not null default '00:00:00',
  foreign key (MemberId) references Members(Id),
  foreign key (RouteId) references Routes(Id)
);
go

if object_id('Playlists') > 0
  drop table Playlists;
go

create table Playlists (
  Id uniqueidentifier not null primary key nonclustered,
  MemberId uniqueidentifier not null,
  Name nvarchar(100) not null,
  SongCount int not null default 0,
  Duration nvarchar(100) not null default '00:00:00',
  [Image] nvarchar(100) not null default 'default-playlist.png'
  foreign key (MemberId) references Members(Id)
);
go

if object_id('News') > 0
  drop table News;
go

create table Announcements (
  Id uniqueidentifier not null primary key nonclustered,
  ReportedAt datetime not null default getdate(),
  Content nvarchar(max) not null default ''
);

-- dummy data

insert into Members (Id, Handle, PasswordHash) values
  ('71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'ncloud', '5f4dcc3b5aa765d61d8327deb882cf99');
go

insert into Privileges (Id, MemberId, Claim) values
  ('F8D54F94-2C1A-4463-B8D7-56695DB530CF', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'login'),
  ('C3E7BA56-9186-46E3-BD2D-A939CC1B49B4', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'add-run');
go

insert into Routes (Id, Name, Distance) values
  ('BB94B932-2D05-465B-800A-1E6AC505CFD1', 'Old Town Florissant', 2.1),
  ('519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', 'Creve Coeur Lake Park', 3.5),
  ('D2B7545F-A286-4231-8C0A-0D5728ABFEA5', 'Katy Trail', 10.0),
  ('00281890-28A4-4486-853C-F32BFFE3F4E0', 'Rockwood Reservation', 13.9);
go

insert into Runs (Id, MemberId, RouteId, ScheduledAt, Duration) values
  ('96F7610C-B64C-4E82-99CA-EF5B1ABD48EE', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-23', '00:24:21'),
  ('D567007B-EAF5-4661-A0F3-487F4B925B88', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', '00281890-28A4-4486-853C-F32BFFE3F4E0', '2012-03-21', '02:35:11'),
  ('F1D4BD5F-D5CF-44C5-9AEE-98B2579512A4', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-19', '00:25:09'),
  ('627965C5-321D-4C3C-9F9F-7AAFF6B976A3', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', '519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', '2012-03-17', '00:20:50'),
  ('44DDF1BA-09B9-4AD2-9A81-CD1660A2EF7A', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', '519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', '2012-03-15', '00:21:18'),
  ('F85246BB-3C34-4856-97B8-FB44C9424EAE', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-15', '00:24:24'),
  ('9ED3EC47-9090-4923-BCA3-974EBBAF314B', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'D2B7545F-A286-4231-8C0A-0D5728ABFEA5', '2012-04-01', '02:05:32'),
  ('F83FF7DE-950E-4C5A-BF48-2E0959956D7F', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'D2B7545F-A286-4231-8C0A-0D5728ABFEA5', '2012-04-01', '02:03:22');
go

insert into Playlists (Id, MemberId, Name, SongCount, Duration, [Image]) values
  ('78A7B88A-1217-4877-8DC1-D4CEA5420C93', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'Thump Pop', 120, '7:23:15', 'playlist1.png'),
  ('D67A1B3D-9BDF-4910-83B6-61ED62B5BA50', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'Noise Canon', 89, '6:54:10', 'playlist2.png'),
  ('CD4B070E-E0FC-46CA-9FF0-41111DD85F8B', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'ours is the fury', 20, '1:14:33', 'playlist3.png'),
  ('69DC1930-FC3E-429F-B34C-BCBC16F7895D', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'WAT', 45, '2:47:44', 'playlist4.png');
go

insert into Announcements (Id, ReportedAt, Content) values
  ('FCB89EB6-C972-480A-A506-1A9DEC726EFD', '2012-04-08', 'New members will be introduced at upcoming TriAth meeting on the 15th. If you haven''t joined but want to, please make sure you contact Gayle at g.bridges@u2fast.com.'),
  ('757D5753-03B9-43CC-8B91-0B7C4824EC45', '2012-04-02', 'Due to the overwhelming positive response we have received from members who are interested in a custom HamstringFX podcast, we are looking to recruit a few members every month who would like to participate on an interview panel.  We will be discussing topics important to runners, such as stretching, proper nutrition, customized routines, good running locations, etc.  Doug will be recruiting at our next meeting!'),
  ('62AAAB60-908A-41AC-B3DE-5A409F2BDD46', '2012-03-22', 'The STL Road Rage crew has a few exta slots open for their weekly biking excursion next week. If you want a break from running and would like to join up, contact Walt at 555-1212.  Their website is http://stlroadrage.com if you would like more information.'),
  ('90103E6E-E15C-4F01-9665-0480BC128688', '2012-03-22', 'For Paleo enthusiasts, an open forum on Paleo nutrition will be conducted on July 12 at WashU.  This is a great opportunity to educate students on the benefits of Paleo!'),
  ('5231ACCB-0C07-49B0-A2A4-049CAD3CE110', '2012-02-10', 'We have recieved a generous donation from the Fit and Fun Foundation that will allow us to reduce member fees this year by $15!  This is a great opportunity to reach out to people in our community who might be thinking of joining -- friends and family for sure -- and convince them to join!  Our new fee for 2012 is now $35 per person, per year.');
go
  