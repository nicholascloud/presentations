using System.Data.Entity;
using HamstringFX.data;

namespace HamstringFX.Test.fake {
  public class FakeHamstringData : IHamstringData {
    public IDbSet<Route> Routes { get; set; }
    public IDbSet<Run> Runs { get; set; }
    public IDbSet<Member> Members { get; set; }
    public IDbSet<Privilege> Privileges { get; set; }
    public IDbSet<Playlist> Playlists { get; set; }
    public IDbSet<Announcement> Announcements { get; set; }

    public int SaveChanges() {
      throw new System.NotImplementedException();
    }
  }
}