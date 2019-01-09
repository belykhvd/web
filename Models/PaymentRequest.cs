using System;

namespace Models
{
    public class PaymentRequest
    {
        public Guid PaymentRequestId { get; set; }
        public string Inn { get; set; }
        public string Bic { get; set; }        
        public string AccountNumber { get; set; }
        public int Vat { get; set; }
        public decimal Sum { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public ValidationResult Validate()
        {
            return ValidationResult.Success
                .ValidateInn(Inn)
                .ValidateBic(Bic)
                .ValidateAccountNumber(AccountNumber)
                .ValidateVat(Vat)
                .ValidateSum(Sum)
                .ValidatePhone(Phone)
                .ValidateEmail(Email);
        }
    }
}