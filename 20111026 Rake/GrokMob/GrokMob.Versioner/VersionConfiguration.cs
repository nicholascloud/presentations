using System;
using System.Configuration;

namespace GrokMob.Versioner {
  public class VersionConfiguration : ConfigurationSection {

    [ConfigurationProperty("versionType", IsRequired = false)]
    public String VersionType {
      get { return this["versionType"] as String; }
      set { this["versionType"] = value; }
    }
  }
}