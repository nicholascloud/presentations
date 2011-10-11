using System.Collections.Generic;
using System.Web.Mvc;
using GrokMob.ReadModel;

namespace GrokMob.Models {
  public class DashboardViewData {
    public DashboardViewData(
      IEnumerable<Venue> venues,
      IEnumerable<MeetingComment> recentComments,
      IEnumerable<Meeting> futureMeetings) {
      
      Venues = new HashSet<SelectListItem>();
      foreach (Venue venue in venues) {
        Venues.Add(new SelectListItem { Text = venue.Name, Value = venue.Name });
      }

      RecentComments = new HashSet<MeetingComment>(recentComments);
      FutureMeetings = new HashSet<Meeting>(futureMeetings);
    }

    public ISet<SelectListItem> Venues { get; private set; }

    public ISet<Meeting> FutureMeetings { get; private set; }

    public ISet<MeetingComment> RecentComments { get; private set; }
  }
}