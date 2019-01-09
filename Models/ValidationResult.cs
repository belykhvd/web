namespace Models
{
    public class ValidationResult
    {
        public bool IsValid { get; set; } = true;
        public string Error { get; set; }

        public static ValidationResult Success => new ValidationResult();

        public static ValidationResult Fail(string error) => new ValidationResult
        {
            IsValid = false,
            Error = error
        };        
    }
}