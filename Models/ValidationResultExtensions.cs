using System;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace Models
{
    public static class ValidationResultExtensions
    {
        private static readonly Regex DigitSequenceRegex = new Regex("\\d+", RegexOptions.Compiled);
        private static readonly Regex PhoneRegex = 
            new Regex("\\+7\\s\\d{3}\\s\\d{3}-\\d{2}-\\d{2}", RegexOptions.Compiled);

        public static ValidationResult ValidateCardNumber(this ValidationResult validationResult, string cardNumber)
        {
            return validationResult.Decide(() => cardNumber != null && cardNumber.Length == 16 && DigitSequenceRegex.IsMatch(cardNumber),
                "Номер карты должен состоять из 16 цифр");
        }

        public static ValidationResult ValidateSum(this ValidationResult validationResult, decimal sum)
        {
            return validationResult.Decide(() => sum >= 1000 && sum <= 75000,
                "Сумма перевода должны быть от 1000 до 75000 ₽");
        }

        public static ValidationResult ValidateExpiration(this ValidationResult validationResult, string expiration)
        {
            if (!validationResult.IsValid)
                return validationResult;

            var errorResult = ValidationResult.Fail("Месяц/год действия карты должны быть в формате ММ/ГГ");
            if (expiration?.Length != 5)
                return errorResult;

            var splitted = expiration.Split("/");
            if (!int.TryParse(splitted[0], out var month) || !int.TryParse(splitted[1], out var year))
                return errorResult;

            return month >= 1 && month <= 12 && year >= 19 && year <= 35
                ? ValidationResult.Success
                : errorResult;
        }

        public static ValidationResult ValidateCvc(this ValidationResult validationResult, string cvc)
        {           
            return validationResult.Decide(() => cvc != null && cvc.Length == 3 && ushort.TryParse(cvc, out _),
                "CVC должен состоять из 3 цифр");
        }

        public static ValidationResult ValidateComment(this ValidationResult validationResult, string comment)
        {
            return validationResult.Decide(() => comment == null || comment.Length <= 150,
                "Длина комментария не должна превышать 150 символов");
        }

        public static ValidationResult ValidateEmail(this ValidationResult validationResult, string email)
        {
            if (!validationResult.IsValid || string.IsNullOrWhiteSpace(email))
                return validationResult;

            try
            {
                var _ = new MailAddress(email);
                return ValidationResult.Success;
            }
            catch (FormatException)
            {
                return ValidationResult.Fail("Email имеет неверный формат");
            }            
        }

        public static ValidationResult ValidateInn(this ValidationResult validationResult, string inn)
        {
            return validationResult.Decide(() => inn != null
                                                 && (inn.Length == 10 || inn.Length == 12)
                                                 && DigitSequenceRegex.IsMatch(inn),
                "ИНН должен состоять из 10 или 12 цифр");
        }

        public static ValidationResult ValidateBic(this ValidationResult validationResult, string bic)
        {
            return validationResult.Decide(() => bic != null && bic.Length == 9 && DigitSequenceRegex.IsMatch(bic),
                "БИК должен состоять из 9 цифр");
        }

        public static ValidationResult ValidateVat(this ValidationResult validationResult, int vat)
        {
            return validationResult.Decide(() => vat == 0 || vat == 10 || vat == 18,
                "Допустимые значения НДС: без НДС, 10%, 18%");
        }

        public static ValidationResult ValidateAccountNumber(this ValidationResult validationResult, string accountNumber)
        {
            return validationResult.Decide(() => accountNumber != null
                                                 && accountNumber.Length == 20
                                                 && DigitSequenceRegex.IsMatch(accountNumber),
                "Номер счета должен состоять из 20 цифр");
        }

        public static ValidationResult ValidatePhone(this ValidationResult validationResult, string phone)
        {
            return validationResult.Decide(() => phone != null && PhoneRegex.IsMatch(phone),
                "Номер телефона должен быть в формате +7 999 999-99-99");
        }

        public static ValidationResult Decide
        (
            this ValidationResult validationResult,
            Func<bool> condition,
            string error
        )
        {
            if (!validationResult.IsValid)
                return validationResult;

            return condition()
                ? ValidationResult.Success
                : ValidationResult.Fail(error);
        }
    }
}