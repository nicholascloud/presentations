using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate;

namespace CoffeeShop.Domain {
    public static class DataStore {
        public static ISessionFactory Current { get; set; }
    }
}
