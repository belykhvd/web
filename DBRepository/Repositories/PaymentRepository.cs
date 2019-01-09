using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository.Repositories
{
    public class PaymentRepository : BaseRepository, IPaymentRepository
    {
        public PaymentRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        {
        }
      
        public async Task SaveCardPaymentAsync(CardPayment cardPayment)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                await context.AddAsync(cardPayment).ConfigureAwait(false);
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

        public async Task<IEnumerable<CardPayment>> SelectCardPaymentsAsync
        (
            SearchParameters searchParameters,
            SortParameters sortParameters
        )
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {              
                var query = context.CardPayments.AsQueryable();

                if (searchParameters?.Column != null && searchParameters.Prefix != null)
                {                   
                    query = query.Where(payment =>
                        typeof(CardPayment)
                            .GetProperty(searchParameters.Column)
                            .GetValue(payment)
                            .ToString()
                            .StartsWith(searchParameters.Prefix));
                }

                if (sortParameters?.Column != null)
                {
                    if (sortParameters.DescendingOrder)
                    {
                        query = query.OrderByDescending(payment =>
                            typeof(CardPayment)
                                .GetProperty(sortParameters.Column)
                                .GetValue(payment)
                                .ToString());
                    }
                    else
                    {
                        var columnProp = typeof(CardPayment).GetProperty(sortParameters.Column);
                        query = query.OrderBy(payment =>
                            columnProp
                                .GetValue(payment)
                                .ToString());
                    }                                            
                }
                    
                return await query.ToListAsync().ConfigureAwait(false);
            }           
        }

        public async Task<IEnumerable<PaymentRequest>> SelectPaymentRequestsAsync
        (
            SearchParameters searchParameters,
            SortParameters sortParameters
        )
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.PaymentRequests.AsQueryable();

                if (searchParameters?.Column != null && searchParameters.Prefix != null)
                {
                    query = query.Where(request =>
                        typeof(PaymentRequest)
                            .GetProperty(searchParameters.Column)
                            .GetValue(request)
                            .ToString()
                            .StartsWith(searchParameters.Prefix));
                }

                if (sortParameters?.Column != null)
                {
                    if (sortParameters.DescendingOrder)
                    {
                        query = query.OrderByDescending(payment =>
                            typeof(PaymentRequest)
                                .GetProperty(sortParameters.Column)
                                .GetValue(payment)
                                .ToString());
                    }
                    else
                    {
                        var columnProp = typeof(PaymentRequest).GetProperty(sortParameters.Column);
                        query = query.OrderBy(payment =>
                            columnProp
                                .GetValue(payment)
                                .ToString());
                    }
                }

                return await query.ToListAsync().ConfigureAwait(false);
            }
        }

        public async Task ToggleCardPaymentSafetyAsync(Guid paymentId, bool isSafe)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var payment = context.CardPayments
                    .Single(p => p.CardPaymentId == paymentId);

                payment.IsSafe = isSafe;

                context.CardPayments.Attach(payment);
                context.Entry(payment).Property(p => p.IsSafe).IsModified = true;
                await context.SaveChangesAsync().ConfigureAwait(false);
            }
        }

        //var query = @"select *
        //                  from card_payments";

        //if (sortColumn != null)
        //    query += " order by ";         

        //using (var conn = await dbConnectionFactory.OpenAsync(cancellation).ConfigureAwait(false))
        //{
        //    await conn.QueryAsync<CardPayment>(
        //            @"select *
        //                  from card_payments
        //                  ")
        //              .ConfigureAwait(false);
        //}
    }
}