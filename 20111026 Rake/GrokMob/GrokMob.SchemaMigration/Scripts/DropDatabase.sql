use [master];
go

if db_id('GrokMob') is not null
  begin
    print 'Dropping GrokMob...'
    drop database [GrokMob];
  end
else
  print 'Database GrokMob does not exist; aborting'
go