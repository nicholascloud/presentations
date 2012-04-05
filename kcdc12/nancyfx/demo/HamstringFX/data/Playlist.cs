using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {
  public class Playlist {
    [Key]
    public Guid Id { get; set; }
    public Guid MemberId { get; set; }
    public String Name { get; set; }
    public Int32 SongCount { get; set; }
    public String Duration { get; set; }
    public String Image { get; set; }

    [ForeignKey("MemberId")]
    public virtual Member Member { get; set; }
  }
}