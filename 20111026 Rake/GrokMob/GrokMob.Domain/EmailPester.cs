using System.Net.Mail;
using GrokMob.Pester;

namespace GrokMob.Domain {
  public class EmailPester : CanPester {
    public EmailPester(System.Net.Mail.MailMessage message) {
      _message = message;
    }

    private readonly MailMessage _message;

    public void Pester() {
      //send email
    }
  }
}