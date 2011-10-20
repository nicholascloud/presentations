using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FluentMigrator;

namespace GrokMob.SchemaMigration {
  [Migration(1)]
  public class Migration1 : Migration {
    public override void Up() {

      // MEETING ----------------------------------------------------------------------------------

      Create.Table("Meeting")
        .WithColumn("Id").AsGuid().NotNullable().PrimaryKey("PK_Meeting.Id")
        .WithColumn("Title").AsString().NotNullable()
        .WithColumn("Description").AsString().NotNullable()
        .WithColumn("ScheduledFor").AsDateTime().NotNullable()
        .WithColumn("Location").AsString().NotNullable();

      Execute.Sql(Resource.Data("Meeting"));

      // COMMENT ----------------------------------------------------------------------------------

      Create.Table("Comment")
        .WithColumn("Id").AsGuid().NotNullable().PrimaryKey("PK_Comment.Id")
        .WithColumn("MeetingId").AsGuid().NotNullable()
        .WithColumn("MemberHandle").AsString().NotNullable()  
        .WithColumn("Content").AsString().NotNullable()
        .WithColumn("CreatedAt").AsDateTime().NotNullable();
      Create.ForeignKey("FK_Comment.MeetingId-Meeting.Id")
        .FromTable("Comment").ForeignColumn("MeetingId")
        .ToTable("Meeting").PrimaryColumn("Id");
      Create.Index("IX_Comment.MemberHandle")
        .OnTable("Comment").OnColumn("MemberHandle")
        .Ascending().WithOptions().NonClustered();

      Execute.Sql(Resource.Data("Comment"));
    }

    public override void Down() {
      Delete.Table("Comment");
      Delete.Table("Meeting");
    }
  }
}
