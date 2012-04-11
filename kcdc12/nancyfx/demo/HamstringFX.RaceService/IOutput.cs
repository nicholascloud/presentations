using System;

namespace HamstringFX.RaceService {
  public interface IOutput {
    void Write(String content);

    void WriteLine(String content);
  }
}