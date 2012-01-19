use GrokMob;
go

delete from Venue;
go

insert into Venue (Id, Name, [Address]) values
('F49BC51A-6BD1-4BF6-8ABE-351A69BCEF13', 'Professional Employment Group', '999 Executive Parkway Suite 100, Saint Louis, MO 63141'),
('B123C216-E47F-4075-9F74-AA285E9E86B2', 'International Taphouse', '161 Long Rd. #107, Chesterfield, MO 63005'),
('DF875819-354B-477E-9E42-859751007A1A', 'Juggle.com', '#33 Bronze Pointe Suite 150, Swansea, IL 62226');
go