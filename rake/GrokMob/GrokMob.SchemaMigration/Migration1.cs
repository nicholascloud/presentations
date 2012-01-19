using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FluentMigrator;

namespace GrokMob.SchemaMigration {
  [Migration(1)]
  public class Migration1 : Migration {
    public override void Up() {

      // MEMBER -----------------------------------------------------------------------------------

      Create.Table("Member")
        .WithColumn("Handle").AsString().NotNullable().PrimaryKey("PK_Member.Handle")
        .WithColumn("Name").AsString().NotNullable()
        .WithColumn("Technologies").AsString()
        .WithColumn("JoinedAt").AsDateTime().NotNullable();

      Insert.IntoTable("Member")
        .Row(new {
          Name = "Nicholas Cloud",
          Handle = "ncloud",
          Technologies = ".NET, HTML5, JavaScript",
          JoinedAt = DateTime.Now.AddYears(-1)
        })
        .Row(new {
          Name = "Han Solo",
          Handle = "nerfherder",
          Technologies = "blaster, Millennium Falcon",
          JoinedAt = DateTime.Now.AddMonths(-3)
        })
        .Row(new {
          Name = "Fry",
          Handle = "fry",
          Technologies = "pizza, Planet Express ship, Bender",
          JoinedAt = DateTime.Now.AddHours(-2)
        })
        .Row(new {
          Name = "Bender",
          Handle = "lordbender",
          Technologies = "my shiny metal ass",
          JoinedAt = DateTime.Now.AddHours(-1)
        })
        .Row(new {
          Name = "Bruce Wayne",
          Handle = "Batman",
          Technologies = "Batarang, Batmobile, Shark Repellant",
          JoinedAt = DateTime.Now.AddMonths(-3)
        });

      // MEETING ----------------------------------------------------------------------------------

      Create.Table("Meeting")
        .WithColumn("Id").AsInt32().NotNullable().PrimaryKey("PK_Meeting.Id").Identity()
        .WithColumn("Title").AsString().NotNullable()
        .WithColumn("Description").AsString().NotNullable()
        .WithColumn("ScheduledFor").AsDateTime().NotNullable()
        .WithColumn("Location").AsString().NotNullable();

      Execute.Sql("set IDENTITY_INSERT Meeting ON;");
      Execute.Sql(Resource.Data("Meeting"));
      Execute.Sql("set IDENTITY_INSERT Meeting OFF;");

      // COMMENT ----------------------------------------------------------------------------------

      Create.Table("Comment")
        .WithColumn("Id").AsInt32().NotNullable().PrimaryKey("PK_Comment.Id").Identity()
        .WithColumn("MeetingId").AsInt32().NotNullable()
        .WithColumn("MemberHandle").AsString().NotNullable()
        .WithColumn("Content").AsString().NotNullable()
        .WithColumn("CreatedAt").AsDateTime().NotNullable();
      Create.ForeignKey("FK_Comment.MeetingId-Meeting.Id")
        .FromTable("Comment").ForeignColumn("MeetingId")
        .ToTable("Meeting").PrimaryColumn("Id");
      Create.ForeignKey("FK_Comment.MemberHandle-Member.Handle")
        .FromTable("Comment").ForeignColumn("MemberHandle")
        .ToTable("Member").PrimaryColumn("Handle");
      Create.Index("IX_Comment.MemberHandle")
        .OnTable("Comment").OnColumn("MemberHandle")
        .Ascending().WithOptions().NonClustered();

      Execute.Sql("set IDENTITY_INSERT Comment ON;");
      Execute.Sql(Resource.Data("Comment"));
      Execute.Sql("set IDENTITY_INSERT Comment OFF;");
    }

    public override void Down() {
      Delete.Table("Comment");
      Delete.Table("Meeting");
      Delete.Table("Member");
    }
  }
}
