using System.Collections.Generic;
using GrokMob.ReadModel;

namespace GrokMob.Models {
  public class MeetingViewData {
    public Meeting Meeting { get; set; }
    public IEnumerable<MeetingComment> Comments { get; set; }
  }
}