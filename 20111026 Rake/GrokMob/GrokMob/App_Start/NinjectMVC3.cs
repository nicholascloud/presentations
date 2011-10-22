using System.Web.Mvc;
using GrokMob.ActionFilters;
using GrokMob.App_Start;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using Ninject;
using Ninject.Web.Mvc;
using Ninject.Web.Mvc.FilterBindingSyntax;
using PetaPoco;
using WebActivator;

[assembly: PreApplicationStartMethod(typeof (NinjectMVC3), "Start")]
[assembly: ApplicationShutdownMethod(typeof (NinjectMVC3), "Stop")]

namespace GrokMob.App_Start {
  public static class NinjectMVC3 {
    private static readonly Bootstrapper bootstrapper = new Bootstrapper();

    /// <summary>
    /// Starts the application
    /// </summary>
    public static void Start() {
      DynamicModuleUtility.RegisterModule(typeof (OnePerRequestModule));
      DynamicModuleUtility.RegisterModule(typeof (HttpApplicationInitializationModule));
      bootstrapper.Initialize(CreateKernel);
    }

    /// <summary>
    /// Stops the application.
    /// </summary>
    public static void Stop() {
      bootstrapper.ShutDown();
    }

    /// <summary>
    /// Creates the kernel that will manage your application.
    /// </summary>
    /// <returns>The created kernel.</returns>
    private static IKernel CreateKernel() {
      var kernel = new StandardKernel();
      RegisterServices(kernel);
      return kernel;
    }

    /// <summary>
    /// Load your modules or register your services here!
    /// </summary>
    /// <param name="kernel">The kernel.</param>
    private static void RegisterServices(IKernel kernel) {
      kernel.Bind<Database>()
        .ToMethod(c => new PetaPoco.Database("GrokMob"))
        .InRequestScope();

      kernel.BindFilter<StatsViewDataAttribute>(FilterScope.Global, 0);
      kernel.BindFilter<UserViewDataAttribute>(FilterScope.Global, 0);
    }
  }
}