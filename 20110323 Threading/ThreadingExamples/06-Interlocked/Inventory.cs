using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InterlockedExample {

    class Inventory : IInventory {
        
        private int _itemsInStock;

        public Inventory(int itemsInStock) {
            _itemsInStock = itemsInStock;
        }

        public int ItemsInStock {
            get { return _itemsInStock; }
        }

        public void Remove(int items) {
            _itemsInStock -= items;
        }

        public void Add(int items) {
            _itemsInStock += items;
        }
    }
}
