using GrokMob.App_Start;
using GrokMob.Mvc;
using GrokMob.ReadModel.Denormalizers;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using Ninject;
using Ninject.Modules;
using Ninject.Web.Mvc;
using WebActivator;

[assembly: PreApplicationStartMethod(typeof (NinjectMVC3), "Start")]
[assembly: ApplicationShutdownMethod(typeof (NinjectMVC3), "Stop")]

namespace GrokMob.App_Start {
  public static class NinjectMVC3 {
    private static readonly Bootstrapper bootstrapper = new Bootstrapper();

    public static IKernel CurrentKernel {
// ReSharper disable CSharpWarnings::CS0612
      get { return bootstrapper.Kernel; }
// ReSharper restore CSharpWarnings::CS0612
    }

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
      var kernel = new StandardKernel(
        new NHibernateModule(),
        new DenormalizerModule(),
        new GlobalFilterModule());

      RegisterServices(kernel);
      return kernel;
    }

    /// <summary>
    /// Load your modules or register your services here!
    /// </summary>
    /// <param name="kernel">The kernel.</param>
    private static void RegisterServices(IKernel kernel) {
    }
  }
}