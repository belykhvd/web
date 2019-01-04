using System;

namespace Models
{
    public class PaymentRequest
    {
        public Guid PaymentRequestId { get; set; }
        public string Inn { get; set; }
        public string Bic { get; set; }        
        public string AccountNumber { get; set; }
        public string Vat { get; set; }
        public decimal Sum { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}