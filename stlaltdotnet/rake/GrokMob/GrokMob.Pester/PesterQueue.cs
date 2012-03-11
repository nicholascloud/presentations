using System.Collections.Generic;

namespace GrokMob.Pester {
  public class PesterQueue : Queue<CanPester> {
    public void LetEmHaveIt() {
      while (Count > 0) {
        CanPester canPester = Dequeue();
        canPester.Pester();
      }
    }
  }
}