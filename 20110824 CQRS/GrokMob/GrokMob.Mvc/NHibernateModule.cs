using System;
using FluentNHibernate.Automapping;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using FluentNHibernate.Conventions;
using FluentNHibernate.Conventions.Instances;
using GrokMob.ReadModel;
using NHibernate;
using Ncqrs;
using Ncqrs.Commanding.ServiceModel;
using Ninject;
using Ninject.Modules;

namespace GrokMob.Mvc {
  public class NHibernateModule : NinjectModule {
    public override void Load() {
      ISessionFactory factory = ConfigureNHibernate();

      Bind<ICommandService>()
        .ToMethod(c => NcqrsEnvironment.Get<ICommandService>());
      Bind<ISessionFactory>()
        .ToConstant(factory);
      Bind<ISession>()
        .ToMethod(c => c.Kernel.Get<ISessionFactory>().OpenSession())
        .InRequestScope();
    }

    private static ISessionFactory ConfigureNHibernate() {
      ISessionFactory factory = Fluently.Configure()
        .Database(
          MsSqlConfiguration.MsSql2008.ConnectionString(c => c.FromConnectionStringWithKey("GrokMob")))
        .Mappings(m =>
          m.AutoMappings
            .Add(AutoMap.AssemblyOf<Meeting>(new ReadModelMappingConfiguration())
              .Conventions.Setup(GetConventions())))
        .CurrentSessionContext("NHibernate.Context.WebSessionContext")
        .BuildSessionFactory();

      return factory;
    }

    private static Action<IConventionFinder> GetConventions() {
      return c => c.Add<PrimaryKeyConvention>();
    }

    private class PrimaryKeyConvention : IIdConvention {
      public void Apply(IIdentityInstance instance) {
        instance.GeneratedBy.Assigned();
      }
    }

    private class ReadModelMappingConfiguration : DefaultAutomappingConfiguration {
      public override bool ShouldMap(Type type) {
        return type.Namespace == "GrokMob.ReadModel";
      }
    }
  }
}