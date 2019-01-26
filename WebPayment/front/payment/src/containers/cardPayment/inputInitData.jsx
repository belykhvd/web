import validators from "../../redux/validators.jsx";

export default [
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd50",
        "inputId": "cardNumber",
        "labelText": "Номер карты",
        "inputPlaceholder": "",
        "inputPattern": "\\d{16}",
        "inputMaxLength": "16",
        "inputFormatHint": "Ровно 16 цифр",
        "inputRequired": true,
        "validator": validators.cardNumber
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd51",
        "inputId": "expiration",
        "labelText": "ММ/ГГ карты",
        "inputPlaceholder": "ММ/ГГ",
        "inputPattern": "\\d\\d/\\d\\d",
        "inputMaxLength": "5",
        "inputFormatHint": "ММ/ГГ",
        "inputRequired": true,
        "validator": validators.expiration
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd52",
        "inputId": "cvc",
        "labelText": "CVC",
        "inputPlaceholder": "",
        "inputPattern": "\\d{3}",
        "inputMaxLength": "3",
        "inputFormatHint": "Ровно три цифры",
        "inputRequired": true,
        "validator": validators.cvc
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd53",
        "inputId": "sum",
        "labelText": "Сумма перевода",
        "inputPlaceholder": "От 1000 до 75000 ₽",
        "inputPattern": "\\d+",
        "inputMaxLength": "8",
        "inputFormatHint": "От 1000 до 75000 ₽",
        "inputRequired": true,
        "validator": validators.sum
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd54",
        "inputId": "comment",
        "labelText": "Комментарий",
        "inputPlaceholder": "До 150 символов",
        "inputMaxLength": "150",
        "inputFormatHint": "Максимум 150 символов",
        "inputRequired": false,
        "validator": validators.comment
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd55",
        "inputId": "email",
        "labelText": "Почта",
        "inputPlaceholder": "Для квитанций об оплате",
        "inputPattern": ".+@.+\\..+",
        "inputFormatHint": "example@site.com",
        "inputRequired": false,
        "validator": validators.email
    }
]