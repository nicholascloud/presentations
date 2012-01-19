using System;

namespace GrokMob.Domain {
  public class GrowlMessage {
    public GrowlMessage(String title, String content) {
      Title = title;
      Content = content;
    }

    public String Title { get; private set; }
    public String Content { get; private set; }
  }
}