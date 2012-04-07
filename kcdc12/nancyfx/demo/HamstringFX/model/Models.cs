using HamstringFX.data;

namespace HamstringFX.model {

  public sealed class Models {
    public Models (IHamstringData db, IRaceServiceProxy proxy) {
      _db = db;
      _proxy = proxy;
    }

    private readonly IHamstringData _db;
    private readonly IRaceServiceProxy _proxy;

    public IModelFactory MainModel () {
      return new MainModelFactory(_proxy);
    }

    public IModelFactory PortalModel (Member member) {
      return new PortalModelFactory(_db, member);
    }

  }
}