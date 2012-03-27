using System;

namespace HamstringFX.Core.models {

  [PetaPoco.TableName("Routes")]
  [PetaPoco.PrimaryKey("Id")]
  public class Route {
    public Guid Id { get; set; }
    public String Name { get; set; }
    public Decimal Distance { get; set; }
  }
}