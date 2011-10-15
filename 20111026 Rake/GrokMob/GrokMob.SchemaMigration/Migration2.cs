using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FluentMigrator;

namespace GrokMob.SchemaMigration {
  [Migration(2)]
  class Migration2 : Migration {
    public override void Up() {
      Create.Table("Stat")
        .WithColumn("Id").AsGuid().NotNullable().PrimaryKey("PK_Stat.Id")
        .WithColumn("Moniker").AsString().NotNullable()
        .WithColumn("Label").AsString().NotNullable()
        .WithColumn("Value").AsInt32().NotNullable();

      Create.Table("Venue")
        .WithColumn("Id").AsGuid().NotNullable().PrimaryKey("PK_Venue.Id")
        .WithColumn("Name").AsString().NotNullable()
        .WithColumn("Address").AsString().NotNullable();
    }

    public override void Down() {
      Delete.Table("Venue");
      Delete.Table("Stat");
    }
  }
}
