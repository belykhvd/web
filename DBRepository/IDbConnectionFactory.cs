using System.Data;
using System.Threading;
using System.Threading.Tasks;

namespace DBRepository
{
    public interface IDbConnectionFactory
    {
        Task<IDbConnection> OpenAsync(CancellationToken cancellation);
    }
}