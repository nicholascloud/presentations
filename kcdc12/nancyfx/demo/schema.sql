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
  ScheduledAt datetime not null,
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
  Hours int not null default 0,
  Minutes int not null default 0,
  Seconds int not null default 0
  foreign key (MemberId) references Members(Id)
);
go

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
  ('96F7610C-B64C-4E82-99CA-EF5B1ABD48EE', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-23', '00:25:00'),
  ('D567007B-EAF5-4661-A0F3-487F4B925B88', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', '00281890-28A4-4486-853C-F32BFFE3F4E0', '2012-03-21', '00:25:00'),
  ('F1D4BD5F-D5CF-44C5-9AEE-98B2579512A4', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-19', '00:25:00'),
  ('627965C5-321D-4C3C-9F9F-7AAFF6B976A3', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', '519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', '2012-03-17', '00:20:00'),
  ('44DDF1BA-09B9-4AD2-9A81-CD1660A2EF7A', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', '519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', '2012-03-15', '00:20:00'),
  ('F85246BB-3C34-4856-97B8-FB44C9424EAE', '71ED18D9-DE5D-4DC5-9DCF-E9F143605E15', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-15', '00:20:00');
go
