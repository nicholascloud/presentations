using GrokMob.Commands;
using GrokMob.Domain;
using Ncqrs.Commanding.CommandExecution;
using Ncqrs.Domain;

namespace GrokMob.CommandExecutors {
  public class AddCommentCommandExecutor : CommandExecutorBase<AddCommentCommand> {
    
    protected override void ExecuteInContext(IUnitOfWorkContext context, AddCommentCommand command) {

      var meeting = context.GetById<Meeting>(command.MeetingId);

      meeting.AddComment(command.MemberHandle, command.Comment);
      
      context.Accept();
    }
  }
}