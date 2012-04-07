using System;
using System.IO;

namespace HamstringFX.RaceService.data {
  internal interface IDataStream {
    void Read(Action<Stream> onStreamOpened);
  }
}