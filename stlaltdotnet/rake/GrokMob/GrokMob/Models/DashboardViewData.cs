using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace GrokMob.Models {
  public class DashboardViewData {
    public DashboardViewData(
      IEnumerable<Venue> venues,
      IEnumerable<Comment> recentComments,
      IEnumerable<Meeting> futureMeetings) {

      Venues = venues.OrderBy(v => v.Name)
        .Select(v => new SelectListItem {
          Text = v.Name,
          Value = v.Name
        }).ToList();

      RecentComments = new List<Comment>(recentComments);
      FutureMeetings = new List<Meeting>(futureMeetings);
    }

    public ICollection<SelectListItem> Venues { get; private set; }

    public ICollection<Meeting> FutureMeetings { get; private set; }

    public ICollection<Comment> RecentComments { get; private set; }
  }
}