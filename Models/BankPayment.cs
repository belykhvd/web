using System;

namespace Models
{
    public class BankPayment
    {
        public Guid BankPaymentId { get; set; }
        public string Inn { get; set; }
        public string Bic { get; set; }
        public string AccountNumber { get; set; }
        public int Vat { get; set; }
        public decimal Sum { get; set; }

        public ValidationResult Validate()
        {
            return ValidationResult.Success
                .ValidateInn(Inn)
                .ValidateBic(Bic)
                .ValidateAccountNumber(AccountNumber)
                .ValidateVat(Vat)
                .ValidateSum(Sum);
        }

        public string AsBankStatement()
            => $"ИНН:{Inn}\n" +
               $"БИК:{Bic}\n" +
               $"Номер счета:{AccountNumber}\n" +
               $"НДС:{Vat}\n" +
               $"Сумма:{Sum}";
    }
}