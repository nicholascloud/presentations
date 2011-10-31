using System;
using System.Text.RegularExpressions;
using GrokMob.Core;

namespace GrokMob.Versioner {

  public sealed class RedmondVersion {
    public RedmondVersion(Int32 major, Int32 minor, Int32 build, Int32 revision)
      : this(major, minor, build, revision, 3) {}

    public RedmondVersion(Int32 major, Int32 minor, Int32 build, Int32 revision, Int32 places) {
      Major = major;
      Minor = minor;
      Build = build;
      Revision = revision;
      _places = places;
      _maxPlaceValue = Int32.Parse("9".Repeat(places));
    }

    private readonly Int32 _places;
    private readonly Int32 _maxPlaceValue;

    public Int32 Major { get; private set; }
    public Int32 Minor { get; private set; }
    public Int32 Build { get; private set; }
    public Int32 Revision { get; private set; }

    public static RedmondVersion Parse(String version, Int32 places = 3) {
      const String version_pattern = @"^\d{1,P}(\.\d{1,P}(\.\d{1,P}(\.\d{1,P}){0,1}){0,1}){0,1}$";
      String v = version.Trim();
      if(!Regex.IsMatch(v, version_pattern.Replace("P", places.ToString()))) {
        throw new Exception("Malformed version file contents");
      }

      Int32[] parts = v.Split('.')
        .Map(Convert.ToInt32);
      
      return new RedmondVersion(
        parts.At(0, 0),
        parts.At(1, 0),
        parts.At(2, 0),
        parts.At(3, 0),
        places
        );
    }

    public override string ToString() {
      return String.Format("{0}.{1}.{2}.{3}",
        Major, Minor, Build, Revision);
    }

    public Int32[] ToArray() {
      return new[] { Major, Minor, Build, Revision };
    }

    public  Tuple<Int32, Int32, Int32, Int32> ToTuple() {
      return new Tuple<Int32, Int32, Int32, Int32>(Major, Minor, Build, Revision);
    }

    private bool IsGreaterThan(RedmondVersion other) {
      return IsGreaterThan(ToArray(), other.ToArray(), 0);
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

    public override bool Equals(object obj) {
      if(ReferenceEquals(this, obj)) {
        return true;
      }
      if(!(obj is RedmondVersion)) {
        return false;
      }
      var other = obj as RedmondVersion;
      return Major == other.Major &&
        Minor == other.Minor &&
          Build == other.Build &&
            Revision == other.Revision;
    }

    public override int GetHashCode() {
      String[] padded = ToArray()
        .Map(Convert.ToString)
        .Map(v => v.PadLeft(_places, '0'));

      String combined = String.Concat(padded);
      return Int32.Parse(combined);
    }

    public void IncrementMajor(int howMany = 1) {
      Major += howMany;
      if (Major > _maxPlaceValue) {
        throw new OutOfBoundsException(
          "The Major version has exceeded the predefined number of numeric places",
          0, _maxPlaceValue);
      }
      Minor = 0;
      Build = 0;
      Revision = 0;
    }
    
    public void IncrementMinor(int howMany = 1) {
      Minor += howMany;
      if (Minor > _maxPlaceValue) {
        IncrementMajor();
      }
      Build = 0;
      Revision = 0;
    }
    
    public void IncrementBuild(int howMany = 1) {
      Build += howMany;
      if (Build > _maxPlaceValue) {
        IncrementMinor();
      }
      Revision = 0;
    }
    
    public void IncrementRevision(int howMany = 1) {
      Revision += howMany;
      if(Revision > _maxPlaceValue) {
        IncrementBuild();
      }
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

    public static RedmondVersion operator ++(RedmondVersion v) {
      v.IncrementRevision();
      return v;
    }
  }
}