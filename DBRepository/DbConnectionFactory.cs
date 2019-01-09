using System.Data;
using System.Threading;
using System.Threading.Tasks;
using Npgsql;

namespace DBRepository
{
    public class DbConnectionFactory : IDbConnectionFactory
    {
        private readonly string connectionString;

        public DbConnectionFactory(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public async Task<IDbConnection> OpenAsync(CancellationToken cancellation)
        {
            var connection = new NpgsqlConnection(connectionString);
            await connection.OpenAsync(cancellation);
            return connection;
        }
    }
}