using System;
using FluentMigrator;

namespace GrokMob.SchemaMigration {

  [Migration(3)]
  public class Migration3 : Migration {
    public override void Up() {
      Create.Table("Sponsor")
        .WithColumn("Id").AsInt32().NotNullable().PrimaryKey("PK_Sponsor.Id").Identity()
        .WithColumn("Name").AsString().NotNullable()
        .WithColumn("Sponsorship").AsString().NotNullable();

      Execute.Sql("set IDENTITY_INSERT Sponsor ON;");

      Insert.IntoTable("Sponsor")
        .Row(new {
          Id = 1,
          Name = "Professional Employment Group",
          Sponsorship = "meeting facility and projector"
        })
        .Row(new {
          Id = 2,
          Name = "Fpweb.net",
          Sponsorship = "pays for meetup.com site"
        })
        .Row(new {
          Id = 3,
          Name = "Juggle",
          Sponsorship = "hosts remote meetings"
        })
        .Row(new {
          Id = 4,
          Name = "O'Reilly",
          Sponsorship = "books, e-books, videos"
        });

      Execute.Sql("set IDENTITY_INSERT Sponsor OFF;");
    }

    public override void Down() {
      Delete.Table("Sponsor");
    }
  }
}