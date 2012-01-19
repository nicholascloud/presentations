using System;
using System.Linq;
using System.Text;
using Iesi.Collections.Generic;

namespace CoffeeShop.Domain {
    public static class ISetExtensions {

        public static void ForEach<T>(this ISet<T> collection, Action<T> action) {
            
            foreach(T item in collection) {
                action(item);
            }
        }
    }
}
