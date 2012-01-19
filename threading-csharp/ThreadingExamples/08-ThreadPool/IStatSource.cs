namespace ThreadPoolExample {
    internal interface IStatSource {

        string Name { get; }

        int TotalCount { get; }

        void Calculate();
    }
}