using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FluentMigrator;

namespace GrokMob.SchemaMigration {
  [Migration(2)]
  public class Migration2 : Migration {
    public override void Up() {
      Create.Table("Venue")
        .WithColumn("Id").AsInt32().NotNullable().PrimaryKey("PK_Venue.Id").Identity()
        .WithColumn("Name").AsString().NotNullable()
        .WithColumn("Address").AsString().NotNullable();

      Execute.Sql("set IDENTITY_INSERT Venue ON;");
      Execute.Sql(Resource.Data("Venue"));
      Execute.Sql("set IDENTITY_INSERT Venue OFF;");
    }

    public override void Down() {
      Delete.Table("Venue");
    }
  }
}
