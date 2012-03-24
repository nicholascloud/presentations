using Simple.Data;

namespace HamstringFX.Core {
  public sealed class DataStore : IDataStore {
    public dynamic Open() {
      //connection string defined in config
      return Database.Open();
    }
  }
} 