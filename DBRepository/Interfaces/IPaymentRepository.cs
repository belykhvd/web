using System.Threading.Tasks;
using Models;

namespace DBRepository.Interfaces
{
    public interface IPaymentRepository
    {
        Task<Page<Post>> GetPosts(int index, int pageSize, string tag = null);

        Task SavePaymentAnyBankCardAsync(PaymentAnyBankCard payment);
        Task SavePaymentRequestAsync(PaymentRequest paymentRequest);
    }
}