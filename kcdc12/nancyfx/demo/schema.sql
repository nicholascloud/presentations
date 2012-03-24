use master;
go

if exists(select * from sys.databases where name = 'HamstringFX')
  drop database HamstringFX;
go

create database HamstringFX;
go

use HamstringFX;
go

if object_id('Routes') > 0
  drop table Route;
go

create table Routes (
  Id uniqueidentifier not null primary key,
  Name nvarchar(100) not null,
  Distance decimal(10,2) not null
);
go

if object_id('Runs') > 0
  drop table Rns;
go

create table Runs (
  Id uniqueidentifier not null primary key,
  RouteId uniqueidentifier not null,
  ScheduledAt datetime not null,
  Hours int not null default 0,
  Minutes int not null default 0,
  Seconds int not null default 0,
  foreign key (RouteId) references Routes(Id)
);
go

if object_id('Playlists') > 0
  drop table Playlists;
go

create table Playlists (
  Id uniqueidentifier not null primary key,
  Name nvarchar(100) not null,
  SongCount int not null default 0,
  Hours int not null default 0,
  Minutes int not null default 0,
  Seconds int not null default 0 
);
go

-- dummy data

insert into Routes (Id, Name, Distance) values
  ('BB94B932-2D05-465B-800A-1E6AC505CFD1', 'Old Town Florissant', 2.1),
  ('519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', 'Creve Coeur Lake Park', 3.5),
  ('D2B7545F-A286-4231-8C0A-0D5728ABFEA5', 'Katy Trail', 10.0),
  ('00281890-28A4-4486-853C-F32BFFE3F4E0', 'Rockwood Reservation', 13.9);
go

insert into Runs (Id, RouteId, ScheduledAt, Hours, Minutes, Seconds) values
  ('96F7610C-B64C-4E82-99CA-EF5B1ABD48EE', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-23', 0, 25, 0),
  ('D567007B-EAF5-4661-A0F3-487F4B925B88', '00281890-28A4-4486-853C-F32BFFE3F4E0', '2012-03-21', 0, 25, 0),
  ('F1D4BD5F-D5CF-44C5-9AEE-98B2579512A4', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-19', 0, 25, 0),
  ('627965C5-321D-4C3C-9F9F-7AAFF6B976A3', '519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', '2012-03-17', 0, 20, 0),
  ('44DDF1BA-09B9-4AD2-9A81-CD1660A2EF7A', '519002C9-6CA5-4B02-9572-4BA7A3FD8ADD', '2012-03-15', 0, 20, 0),
  ('F85246BB-3C34-4856-97B8-FB44C9424EAE', 'BB94B932-2D05-465B-800A-1E6AC505CFD1', '2012-03-15', 0, 20, 0);
go
