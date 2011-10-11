using System;
using System.Runtime.Remoting.Contexts;

namespace SyncAttributeExample {

    [Synchronization]
    class NameSplitter : ContextBoundObject {

        private readonly Random _random = new Random();
        private string _name;

        public virtual string Name {
            get { return _name; }
            set { _name = value; }
        }

        public virtual NameData SplitName() {
            var nameData = new NameData();

            int splitAt = Name.IndexOf(" ");
            nameData.FirstName = _name.Substring(0, splitAt);
            nameData.LastName = _name.Substring(splitAt + 1, (_name.Length - 1) - splitAt);

            return nameData;
        }
    }
}