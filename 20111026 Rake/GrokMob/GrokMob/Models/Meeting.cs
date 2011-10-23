namespace GrokMob {
  public partial class Meeting {

    public override string ToString() {
      return string.Format("{0} {1}",
        ScheduledFor.ToString("MM-dd-yyyy"), Title);
    }
  }
}