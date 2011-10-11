using System;
using GrokMob.Commands;
using GrokMob.Domain;
using Ncqrs.Commanding.CommandExecution;
using Ncqrs.Domain;

namespace GrokMob.CommandExecutors {
  public class ScheduleNewMeetingCommandExecutor : CommandExecutorBase<ScheduleMeetingCommand> {

    public ScheduleNewMeetingCommandExecutor() { }

    protected override void ExecuteInContext(IUnitOfWorkContext context, ScheduleMeetingCommand command) {

      var meeting = new Meeting(
        command.MeetingId, 
        command.Title, 
        command.Description, 
        command.Location, 
        command.ScheduledFor);

      context.Accept();
    }
  }
}