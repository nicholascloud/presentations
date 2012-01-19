using System;
using System.Linq;
using System.Threading;
using ThreadCommon;

namespace SyncAttributeExample {

    class NameSplitWorker : Worker {

        private readonly NameSplitter _nameSplitter;
        private readonly Random _random = new Random();
        private readonly string[] _names;

        public NameSplitWorker(string name, WaitHandle waitHandle, string[] names, NameSplitter nameSplitter)
            : base(name, waitHandle) {
            _names = names;
            _nameSplitter = nameSplitter;
        }

        protected override void DoWork() {

            while(true) {

                WaitForIt.WaitOne();
                
                string randomName = GetRandomName();
                Console.WriteLine(String.Format("Thread {0} -> trying name {1}", Thread.CurrentThread.Name, randomName));

                _nameSplitter.Name = randomName;
                var splitName = _nameSplitter.SplitName();
                
                if(!_names.Contains(splitName.FirstName + " " + splitName.LastName)) {
                    throw new Exception("A name split failed! " + splitName);
                }
            }
        }

        private string GetRandomName() {
            return _names[_random.Next(0, _names.Length - 1)];
        }
    }
}