using System;
using System.Data.Entity;
using System.Linq;
using Nancy.Security;

namespace HamstringFX.data {
  public interface IHamstringData {
    IDbSet<Route> Routes { get; set; }
    IDbSet<Run> Runs { get; set; }
    IDbSet<Member> Members { get; set; }
    IDbSet<Privilege> Privileges { get; set; }
    IDbSet<Playlist> Playlists { get; set; } 
  }

  public class HamstringData : DbContext, IHamstringData {
    public IDbSet<Route> Routes { get; set; }
    public IDbSet<Run> Runs { get; set; }
    public IDbSet<Member> Members { get; set; }
    public IDbSet<Privilege> Privileges { get; set; }
    public IDbSet<Playlist> Playlists { get; set; }
  }
}