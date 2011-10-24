using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace GrokMob.Versioning {

  public sealed class RedmondVersion {

    public RedmondVersion(Int32 major, Int32 minor, Int32 build, Int32 revision) {
      Major = major;
      Minor = minor;
      Build = build;
      Revision = revision;
    }

    private const String VERSION_PATTERN = @"^\d+(\.\d+(\.\d+(\.\d+){0,1}){0,1}){0,1}$";

    public Int32 Major { get; private set; }
    public Int32 Minor { get; private set; }
    public Int32 Build { get; private set; }
    public Int32 Revision { get; private set; }

    public override string ToString() {
      return String.Format("{0}.{1}.{2}.{3}",
        Major, Minor, Build, Revision);
    }

    public static RedmondVersion Parse(String version) {
      String v = version.Trim();
      if(!Regex.IsMatch(v, VERSION_PATTERN)) {
        throw new Exception("//TODO: message");
      }

      Int32[] parts = v.Split('.')
        .Convert(Convert.ToInt32);
      
      return new RedmondVersion(
        parts.At(0, 0),
        parts.At(1, 0),
        parts.At(2, 0),
        parts.At(3, 0)
        );
    }

    private bool IsGreaterThan(RedmondVersion version) {
      var us = new[] { Major, Minor, Build, Revision };
      var them = new[] { version.Major, version.Minor, version.Build, version.Revision };
      return IsGreaterThan(us, them, 0);
    }

    private bool IsGreaterThan(Int32[] us, Int32[] them, Int32 index) {
      if(index == us.Length - 1) {
        return us[index] > them[index];
      }
      if(us[index] == them[index]) {
        return IsGreaterThan(us, them, index - 1);
      }
      return us[index] > them[index];
    }

    public static bool operator >(RedmondVersion v1, RedmondVersion v2) {
      return v1.IsGreaterThan(v2);
    }

    public static bool operator <(RedmondVersion v1, RedmondVersion v2) {
      return v2.IsGreaterThan(v1);
    }

    public static bool operator >=(RedmondVersion v1, RedmondVersion v2) {
      return v1.IsGreaterThan(v2) || v1.Equals(v2);
    }

    public static bool operator <=(RedmondVersion v1, RedmondVersion v2) {
      return v2.IsGreaterThan(v1) || v1.Equals(v2);
    }

    public static bool operator ==(RedmondVersion v1, RedmondVersion v2) {
      return v1.Equals(v2);
    }

    public static bool operator !=(RedmondVersion v1, RedmondVersion v2) {
      return !(v1 == v2);
    }
  }
}