using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using CoffeeShop.Domain;
using CoffeeShop.MVC.Controllers;
using NHibernate;
using NHibernate.Context;

namespace CoffeeShop.MVC {

    public class MvcApplication : HttpApplication {

        private static ISessionFactory _sessionFactory;

        protected void Application_Start() {

            AreaRegistration.RegisterAllAreas();
            RegisterRoutes(RouteTable.Routes);
            
            _sessionFactory = CreateSessionFactory();

            HibernatingRhinos.Profiler.Appender.NHibernate.NHibernateProfiler.Initialize();

            Debug.WriteLine("Application_Start");
        }

        protected void Application_End() {

            if (_sessionFactory != null) {
                if (!_sessionFactory.IsClosed) {
                    _sessionFactory.Close();
                }
            }

            Debug.WriteLine("Application_End");
        }

        protected void Application_BeginRequest() {

            ManagedWebSessionContext.Bind(HttpContext.Current, _sessionFactory.OpenSession());
            DataStore.Current = _sessionFactory;

            Debug.WriteLine("Application_BeginRequest");
        }

        protected void Application_EndRequest() {

            var session = ManagedWebSessionContext.Unbind(HttpContext.Current, _sessionFactory);
            if (session != null) {
                session.Flush();
                session.Close();
            }

            Debug.WriteLine("Application_EndRequest");
        }

        private static ISessionFactory CreateSessionFactory() {
            string nhibernateConfigurationFilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "bin\\Config\\nhibernate.config");

            if (!File.Exists(nhibernateConfigurationFilePath)) {
                throw new FileNotFoundException("The NHibernate configuration file could not be found", nhibernateConfigurationFilePath);
            }

            return new NHibernate.Cfg.Configuration()
                .Configure(nhibernateConfigurationFilePath)
                .BuildSessionFactory();
        }

        public static void RegisterRoutes(RouteCollection routes) {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default",
                "{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
                );
        }
    }
}