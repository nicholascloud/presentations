using System.Collections.Generic;

namespace GrokMob.Models {
  public class MeetingDetails {

    public MeetingDetails(Meeting meeting, IEnumerable<Comment> comments) {
      Meeting = meeting;
      Comments = new List<Comment>(comments);
    }

    public Meeting Meeting { get; private set; }

    public ICollection<Comment> Comments { get; private set; } 
  }
}