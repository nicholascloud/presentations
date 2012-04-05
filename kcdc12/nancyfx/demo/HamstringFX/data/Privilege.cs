using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {
  public class Privilege {
    [Key]
    public Guid Id { get; set; }
    public Guid MemberId { get; set; }
    public String Claim { get; set; }
  }
}