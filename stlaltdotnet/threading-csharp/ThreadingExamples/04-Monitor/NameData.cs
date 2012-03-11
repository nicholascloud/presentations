using System;

namespace MonitorExample {
    class NameData {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public override string ToString() {
            return String.Format("FirstName : {0}, LastName : {1}",
                FirstName,
                LastName);
        }
    }
}