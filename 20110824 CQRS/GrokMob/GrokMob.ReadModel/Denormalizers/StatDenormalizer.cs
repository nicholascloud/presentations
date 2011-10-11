using System;
using GrokMob.Events;
using NHibernate;
using Ncqrs.Eventing.ServiceModel.Bus;

namespace GrokMob.ReadModel.Denormalizers {
  public class StatDenormalizer : 
    IEventHandler<MeetingScheduledEvent>,
    IEventHandler<CommentAddedEvent> {


    private readonly ISessionFactory _sessionFactory;

    public StatDenormalizer(ISessionFactory sessionFactory) {
      _sessionFactory = sessionFactory;
    }

    public void Handle(IPublishedEvent<MeetingScheduledEvent> @event) {
      using(var session = _sessionFactory.OpenSession()) {
        using(var trx = session.BeginTransaction()) {
          try {
            var stat = session.QueryOver<Stat>()
              .Where(s => s.Moniker == "FutureMeetings")
              .SingleOrDefault();

            if (stat == null) {
              stat = new Stat {
                Id = Guid.NewGuid(),
                Moniker = "FutureMeetings",
                Label = "future meetings",
                Value = 1
              };
              session.Save(stat);
            } else {
              stat.Value++;
              session.Update(stat);
            }

            trx.Commit();

          } catch {
            trx.Rollback();
            throw;
          }
        }
      }
    }

    public void Handle(IPublishedEvent<CommentAddedEvent> evnt) {
      using (var session = _sessionFactory.OpenSession()) {
        using (var trx = session.BeginTransaction()) {
          try {
            var stat = session.QueryOver<Stat>()
              .Where(s => s.Moniker == "TotalComments")
              .SingleOrDefault();

            if (stat == null) {
              stat = new Stat {
                Id = Guid.NewGuid(),
                Moniker = "TotalComments",
                Label = "total comments",
                Value = 1
              };
              session.Save(stat);
            } else {
              stat.Value++;
              session.Update(stat);
            }

            trx.Commit();

          } catch {
            trx.Rollback();
            throw;
          }
        }
      }
    }
  }
}