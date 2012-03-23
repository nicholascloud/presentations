using Simple.Data;

namespace HamstringFX.Core {
  public sealed class DataStore : IDataStore {
    public dynamic Open() {
      return Database.OpenFile("HamstringFX.sqlite");
    }
  }
}