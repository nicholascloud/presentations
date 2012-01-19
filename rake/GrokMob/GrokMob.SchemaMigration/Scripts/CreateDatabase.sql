use [master];
go

if db_id('GrokMob') is null
  begin
    print 'Creating GrokMob...'
    create database [GrokMob];
  end
else
  print 'Database GrokMob already exists; aborting'
go