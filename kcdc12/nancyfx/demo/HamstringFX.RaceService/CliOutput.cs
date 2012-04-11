using System;

namespace HamstringFX.RaceService {
  public class CliOutput : IOutput {
    public void Write(String content) {
      Console.Write(content);
    }

    public void WriteLine(String content) {
      Console.WriteLine(content);
    }
  }
}