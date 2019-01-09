using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DBRepository;
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

        [Route(nameof(ProcessCardPayment))]
        [HttpGet]
        public async Task<WrappedResponse<string>> ProcessCardPayment
        (
            string cardNumber,
            string expiration,
            string cvc,
            decimal sum,
            string comment,
            string email
        )
        {
            var payment = new CardPayment
            {
                CardNumber = cardNumber,
                Expiration = expiration,
                Cvc = cvc,
                Sum = sum,
                Comment = comment,
                Email = email
            };

            var validationResult = payment.Validate();
            if (!validationResult.IsValid)
                return WrappedResponse<string>.Fail($"Неверный формат: {validationResult.Error}");

            await paymentRepository.SaveCardPaymentAsync(payment).ConfigureAwait(false);

            return WrappedResponse<string>.Success();
        }

        [Route(nameof(ProcessPaymentRequest))]
        [HttpGet]
        public async Task<WrappedResponse<string>> ProcessPaymentRequest
        (
            string inn,
            string bic,
            string accountNumber,
            int vat,
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

            var validationResult = paymentRequest.Validate();
            if (!validationResult.IsValid)
                return WrappedResponse<string>.Fail($"Неверный формат: {validationResult.Error}");

            await paymentRepository.SavePaymentRequestAsync(paymentRequest).ConfigureAwait(false);

            return WrappedResponse<string>.Success();
        }

        [Route(nameof(SelectCardPayments))]
        [HttpGet]
        public async Task<WrappedResponse<IEnumerable<CardPayment>>> SelectCardPayments
        (
            string searchColumn,
            string prefix,
            string sortColumn,
            bool descendingOrder
        )
        {
            var searchParameters = new SearchParameters
            {
                Column = searchColumn,
                Prefix = prefix
            };

            var sortParameters = new SortParameters
            {
                Column = sortColumn,
                DescendingOrder = descendingOrder
            };

            var response = await paymentRepository.SelectCardPaymentsAsync(searchParameters, sortParameters)
                                                  .ConfigureAwait(false);

            return WrappedResponse<IEnumerable<CardPayment>>.Success(response);
        }

        [Route(nameof(SelectPaymentRequests))]
        [HttpGet]
        public async Task<WrappedResponse<IEnumerable<PaymentRequest>>> SelectPaymentRequests
        (
            string searchColumn,
            string prefix,
            string sortColumn,
            bool descendingOrder
        )
        {
            var searchParameters = new SearchParameters
            {
                Column = searchColumn,
                Prefix = prefix
            };

            var sortParameters = new SortParameters
            {
                Column = sortColumn,
                DescendingOrder = descendingOrder
            };

            var response = await paymentRepository.SelectPaymentRequestsAsync(searchParameters, sortParameters)
                                                  .ConfigureAwait(false);

            return WrappedResponse<IEnumerable<PaymentRequest>>.Success(response);
        }
        
        [Route(nameof(ToggleCardPaymentSafety))]
        [HttpGet]
        public async Task<WrappedResponse<string>> ToggleCardPaymentSafety(Guid paymentId, bool isSafe)
        {
            await paymentRepository.ToggleCardPaymentSafetyAsync(paymentId, isSafe).ConfigureAwait(false);

            return WrappedResponse<string>.Success();
        }

        public class WrappedResponse<T>
        {
            public bool IsSuccess { get; set; }
            public T Data { get; set; }
            public string Error { get; set; }

            public static WrappedResponse<T> Success(T data = default) => new WrappedResponse<T>
            {
                IsSuccess = true,
                Data = data
            };

            public static WrappedResponse<T> Fail(string error) => new WrappedResponse<T>
            {
                IsSuccess = false,
                Error = error
            };
        }
    }
}