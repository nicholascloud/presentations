using System;

namespace HamstringFX.RaceService.domain {
  public class Race {
    private const string DELIMITER = " ~ ";

    public Race(String title, String url) {
      Parse(title);
      URL = url;
    }

    private void Parse(String title) {
      if (!title.Contains(DELIMITER)) {
        Name = title.Trim();
        return;
      }
      String[] titleParts = title.Split(new[]{DELIMITER}, StringSplitOptions.None);
      if (titleParts.Length == 0) return;
      Name = titleParts[0].Trim();
      Location = titleParts[1].Trim();
      ScheduledAt = DateTime.Parse(titleParts[2].Trim());
    }

    public String Name { get; private set; }
    public String Location { get; private set; }
    public DateTime ScheduledAt { get; private set; }
    public String URL { get; private set; }
  }
}