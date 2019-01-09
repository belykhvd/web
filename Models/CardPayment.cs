using System;

namespace Models
{
    public class CardPayment
    {       
        public Guid CardPaymentId { get; set; }
        public string CardNumber { get; set; }
        public string Expiration { get; set; }
        public string Cvc { get; set; }
        public decimal Sum { get; set; }
        public string Comment { get; set; }
        public string Email { get; set; }
        public bool IsSafe { get; set; } = true;

        public ValidationResult Validate()
        {
            return ValidationResult.Success
                .ValidateCardNumber(CardNumber)
                .ValidateExpiration(Expiration)
                .ValidateCvc(Cvc)
                .ValidateSum(Sum)
                .ValidateComment(Comment)
                .ValidateEmail(Email);
        }
    }
}