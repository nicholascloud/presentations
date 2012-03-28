using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {

  public class Route {
    [Key]
    public Guid Id { get; set; }
    public String Name { get; set; }
    public Decimal Distance { get; set; }
  }
}