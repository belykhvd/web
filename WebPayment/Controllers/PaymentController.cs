using System;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace WebPayment.Controllers
{
    [Route("api/[controller]")]
    public class PaymentController : Controller
    {
        private readonly IPaymentRepository paymentRepository;

        public PaymentController(IPaymentRepository paymentRepository)
        {
            this.paymentRepository = paymentRepository;
        }

        [Route("page")]
        [HttpGet]
        public async Task<Page<Post>> GetPosts(int pageIndex, string tag)
        {
            try
            {
                return await paymentRepository.GetPosts(pageIndex, 10, tag);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }           
        }

        [Route(nameof(ProcessPaymentAnyBankCard))]
        [HttpGet]
        public async Task ProcessPaymentAnyBankCard
        (
            string cardNumber,
            string cardExpiration,
            string cardCvc,
            decimal transactionAmount,
            string userComment,
            string userEmail
        )
        {
            var payment = new PaymentAnyBankCard
            {
                CardNumber = cardNumber,
                CardExpiration = cardExpiration,
                CardCvc = cardCvc,
                TransactionAmount = transactionAmount,
                UserComment = userComment,
                UserEmail = userEmail
            };

            await paymentRepository.SavePaymentAnyBankCardAsync(payment).ConfigureAwait(false);
        }

        [Route("ProcessPaymentRequest")]
        [HttpGet]
        public async Task ProcessPaymentRequestAsync
        (
            string inn,
            string bic,
            string accountNumber,
            string vat,
            decimal sum,
            string phone,
            string email
        )
        {
            var paymentRequest = new PaymentRequest
            {
                Inn = inn,
                Bic = bic,
                AccountNumber = accountNumber,
                Vat = vat,
                Sum = sum,
                Phone = phone,
                Email = email
            };

            await paymentRepository.SavePaymentRequestAsync(paymentRequest).ConfigureAwait(false);
        }
    }
}