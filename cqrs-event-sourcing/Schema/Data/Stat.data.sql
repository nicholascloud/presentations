use GrokMob;
go

delete from Stat;
go

insert into Stat (Id, Moniker, Label, Value) values
('6A5014DD-57DE-4DE2-B0C2-D605EE58A95A', 'FutureMeetings', 'future meetings', 0),
('88E981E2-D626-4B2F-858B-D2FB754A3E28', 'PastMeetings', 'past meetings', 0),
('6BBF5C7B-531E-4BC2-AD51-D86A1EC07F97', 'Members', 'members', 0),
('AE54DFE3-AC45-44BB-8D8E-30ED305FAF3C', 'Sponsors', 'sponsors', 0);
go