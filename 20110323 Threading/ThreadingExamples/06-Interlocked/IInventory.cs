namespace InterlockedExample {
    internal interface IInventory {
        int ItemsInStock { get; }

        void Remove(int items);

        void Add(int items);
    }
}