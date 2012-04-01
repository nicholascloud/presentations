using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {
  public class Member {
    [Key]
    public Guid Id { get; set; }
    public String Handle { get; set; }
    public String PasswordHash { get; set; }
  }
}