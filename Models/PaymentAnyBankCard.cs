using System;

namespace Models
{
    public class PaymentAnyBankCard
    {
        public Guid PaymentAnyBankCardId { get; set; }
        public string CardNumber { get; set; }
        public string CardExpiration { get; set; }
        public string CardCvc { get; set; }
        public decimal TransactionAmount { get; set; }
        public string UserComment { get; set; }
        public string UserEmail { get; set; }
    }
}