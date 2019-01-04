using System;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository.Repositories
{
    public class PaymentRepository : BaseRepository, IPaymentRepository
    {
        public PaymentRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task<Page<Post>> GetPosts(int index, int pageSize, string tag = null)
        {
            var result = new Page<Post> { CurrentPage = index, PageSize = pageSize };

            using (var context = ContextFactory.CreateDbContext(ConnectionString)) // 1
            {                
                var query = context.Posts.AsQueryable();
                if (!string.IsNullOrWhiteSpace(tag))
                {
                    query = query.Where(p => p.Tags.Any(t => t.TagName == tag));
                }

                result.TotalPages = await query.CountAsync();
                //query = query
                //    .Include(p => p.Tags)
                //    .Include(p => p.Comments)
                //    .OrderByDescending(p => p.CreatedDate)
                //    .Skip(index * pageSize)
                //    .Take(pageSize); // 2

                try
                {
                    result.Records = await query.ToListAsync(); //3
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }
               
            }

            return result;
        }

        public async Task SavePaymentAnyBankCardAsync(PaymentAnyBankCard payment)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                await context.AddAsync(payment).ConfigureAwait(false);
                await context.SaveChangesAsync().ConfigureAwait(false);
            }
        }

        public async Task SavePaymentRequestAsync(PaymentRequest paymentRequest)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                await context.AddAsync(paymentRequest).ConfigureAwait(false);
                await context.SaveChangesAsync().ConfigureAwait(false);
            }
        }
    }
}