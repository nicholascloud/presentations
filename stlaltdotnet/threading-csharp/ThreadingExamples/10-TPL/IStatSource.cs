using System.Threading;
using System.Threading.Tasks;

namespace TPLExample {
    internal interface IStatSource {

        string Name { get; }

        int TotalCount { get; }

        void Calculate(CancellationToken cancellationToken);
    }
}