using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DBRepository.Interfaces
{
    public interface IPaymentRepository
    {
        Task SaveCardPaymentAsync(CardPayment cardPayment);
        Task SavePaymentRequestAsync(PaymentRequest paymentRequest);

        Task<IEnumerable<CardPayment>> SelectCardPaymentsAsync(SearchParameters searchParameters, SortParameters sortParameters);
        Task<IEnumerable<PaymentRequest>> SelectPaymentRequestsAsync(SearchParameters searchParameters, SortParameters sortParameters);
        Task ToggleCardPaymentSafetyAsync(Guid paymentId, bool isSafe);
    }
}