using System;

namespace PrizePick {
    public class Prize {
        public int PrizeID { get; internal set; }
        public string Name { get; internal set; }
        public DateTime AwardedAt { get; internal set; }
    }
}