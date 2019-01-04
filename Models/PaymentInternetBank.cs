using System;

namespace Models
{
    public class PaymentInternetBank
    {
        public Guid PaymentInternetBankId { get; set; }
        public string Itn { get; set; }
        public string Bic { get; set; }
        public string Vat { get; set; }
        public decimal Sum { get; set; }
    }
}