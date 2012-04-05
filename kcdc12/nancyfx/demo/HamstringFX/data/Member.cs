using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {
  public class Member {
    [Key]
    public Guid Id { get; set; }
    public String Handle { get; set; }
    public String PasswordHash { get; set; }

    public virtual ICollection<Privilege> Privileges { get; set; }
  }
}