using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {            
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<PaymentAnyBankCard> PaymentsAnyBankCard { get; set; }
        public DbSet<PaymentRequest> PaymentRequests { get; set; }
    }
}