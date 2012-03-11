using System;
using System.Linq;

namespace PrizePick {
    public class Raffle {
        private readonly string[] _names;
        private readonly Random _random = new Random();

        public Raffle(string[] names) {
            _names = names;
        }

        public RaffleResult Pick() {
            string winner = _names[_random.Next(0, _names.Length - 1)];
            var remaining = _names.ToList();
            remaining.RemoveAll(r => r == winner);
            return new RaffleResult(winner, remaining.ToArray());
        }
    }
}