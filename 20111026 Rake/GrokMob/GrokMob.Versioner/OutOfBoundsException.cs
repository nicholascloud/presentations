using System;

namespace GrokMob.Versioner {
  public class OutOfBoundsException : Exception {
    public OutOfBoundsException(Int32 lower, Int32 upper)
      : this(MESSAGE, lower, upper) {
    }

    public OutOfBoundsException(String message, Int32 lower, Int32 upper)
      : base(message) {
      Lower = lower;
      Upper = upper;
    }

    private const String MESSAGE = "Bounds have been exceeded.";

    public Int32 Lower { get; private set; }
    public Int32 Upper { get; private set; }
  }
}