using System.Collections.Generic;
using System.Web.Mvc;
using GrokMob.Domain;

namespace GrokMob.Models {
  public class DashboardViewData {
    public DashboardViewData(
      IEnumerable<Venue> venues,
      IEnumerable<Comment> recentComments,
      IEnumerable<Meeting> futureMeetings) {
      
      Venues = new HashSet<SelectListItem>();
      foreach (Venue venue in venues) {
        Venues.Add(new SelectListItem { Text = venue.Name, Value = venue.Name });
      }

      RecentComments = new HashSet<Comment>(recentComments);
      FutureMeetings = new HashSet<Meeting>(futureMeetings);
    }

    public ISet<SelectListItem> Venues { get; private set; }

    public ISet<Meeting> FutureMeetings { get; private set; }

    public ISet<Comment> RecentComments { get; private set; }
  }
}