using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PrizePick {
    public class RaffleResult {
        public string Winner { get; private set; }
        public string[] RemainingContestants { get; private set; }

        public RaffleResult(string winner, string[] remainingContestants) {
            Winner = winner;
            RemainingContestants = remainingContestants;
        }
    }
}
