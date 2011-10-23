using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GrokMob.Pester {
  public class PesterQueue : Queue<CanPester> {

    public void LetEmHaveIt() {
      while(this.Count > 0) {
        var canPester = this.Dequeue();
        canPester.Pester();
      }
    }
  }
}
