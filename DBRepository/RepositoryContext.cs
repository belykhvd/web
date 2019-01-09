using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {            
        }

        public DbSet<CardPayment> CardPayments { get; set; }
        public DbSet<PaymentRequest> PaymentRequests { get; set; }
    }
}