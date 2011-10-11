using System;
using GrokMob.Events;
using NHibernate;
using Ncqrs.Eventing.ServiceModel.Bus;

namespace GrokMob.ReadModel.Denormalizers {
  public class MeetingDenormalizer :
    IEventHandler<MeetingScheduledEvent>,
    IEventHandler<CommentAddedEvent> {

    public MeetingDenormalizer(ISessionFactory sessionFactory) {
      _sessionFactory = sessionFactory;
    }

    private readonly ISessionFactory _sessionFactory;

    public void Handle(IPublishedEvent<CommentAddedEvent> @event) {
      using (ISession session = _sessionFactory.OpenSession()) {
        using (ITransaction trx = session.BeginTransaction()) {
          try {
            var comment = new MeetingComment {
              Id = Guid.NewGuid(),
              MeetingId = @event.EventSourceId,
              MemberHandle = @event.Payload.MemberHandle,
              Comment = @event.Payload.Comment,
              CreatedAt = @event.Payload.CreatedAt
            };
            session.Save(comment);
            trx.Commit();
          } catch {
            trx.Rollback();
            throw;
          }
        }
      }
    }

    public void Handle(IPublishedEvent<MeetingScheduledEvent> @event) {
      using (ISession session = _sessionFactory.OpenSession()) {
        using (ITransaction trx = session.BeginTransaction()) {
          try {
            var meeting = new Meeting {
              Id = @event.Payload.MeetingId,
              Description = @event.Payload.Description,
              Location = @event.Payload.Location,
              ScheduledFor = @event.Payload.ScheduledFor,
              Title = @event.Payload.Title
            };

            session.Save(meeting);
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