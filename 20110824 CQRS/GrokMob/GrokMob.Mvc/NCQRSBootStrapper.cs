using GrokMob.CommandExecutors;
using GrokMob.Events;
using GrokMob.ReadModel.Denormalizers;
using Ncqrs;
using Ncqrs.Commanding.ServiceModel;
using Ncqrs.Eventing.ServiceModel.Bus;
using Ncqrs.Eventing.Storage;
using Ncqrs.Eventing.Storage.SQL;
using Ninject;

namespace GrokMob.Mvc {
  public static class NCQRSBootStrapper {
    public static void BootUp(IKernel kernel) {
      NcqrsEnvironment.SetDefault<ICommandService>(InitializeCommandService());
      NcqrsEnvironment.SetDefault<IEventStore>(InitializeEventStore());
      NcqrsEnvironment.SetDefault<IEventBus>(InitializeEventBus(kernel));
    }

    private static ICommandService InitializeCommandService() {
      var service = new CommandService();
      service.RegisterExecutor(new ScheduleNewMeetingCommandExecutor());
      service.RegisterExecutor(new AddCommentCommandExecutor());

      return service;
    }

    private static IEventStore InitializeEventStore() {
      return new MsSqlServerEventStore(@"Data Source=localhost; Database=GrokMobEventStore; Integrated Security=SSPI");
    }

    private static IEventBus InitializeEventBus(IKernel kernel) {
      var bus = new InProcessEventBus();
      bus.RegisterHandler<MeetingScheduledEvent>
        (kernel.Get<MeetingDenormalizer>());
      bus.RegisterHandler<MeetingScheduledEvent>
        (kernel.Get<StatDenormalizer>());

      bus.RegisterHandler<CommentAddedEvent>
        (kernel.Get<MeetingDenormalizer>());
      bus.RegisterHandler<CommentAddedEvent>
        (kernel.Get<StatDenormalizer>());

      return bus;
    }
  }
}