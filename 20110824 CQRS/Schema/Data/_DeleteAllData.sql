use GrokMob;
go

delete from Meeting;
delete from MeetingComment;
delete from Member;
-- delete from Venue;
-- update Stat set Value = 0;
delete from Stat;
go

use GrokMobEventStore;
go

delete from Events;
delete from EventSources;
delete from PipelineState;
delete from Snapshots;
go