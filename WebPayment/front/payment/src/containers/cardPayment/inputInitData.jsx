export default [
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd50",
        "inputId": "cardNumber",
        "labelText": "Номер карты",
        "inputPlaceholder": "",
        "inputPattern": "\\d{16}",
        "inputMaxLength": "16",
        "inputFormatHint": "Ровно 16 цифр",
        "inputRequired": true
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd51",
        "inputId": "sum",
        "labelText": "Сумма перевода",
        "inputPlaceholder": "От 1000 до 75000 ₽",
        "inputPattern": "\\d+",
        "inputMaxLength": "8",
        "inputFormatHint": "От 1000 до 75000 ₽",
        "inputRequired": true
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd52",
        "inputId": "expiration",
        "labelText": "Месяц/год окончания действия карты",
        "inputPlaceholder": "ММ/ГГ",
        "inputPattern": "\\d\\d/\\d\\d",
        "inputMaxLength": "5",
        "inputFormatHint": "ММ/ГГ",
        "inputRequired": true
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd53",
        "inputId": "cvc",
        "labelText": "CVC",
        "inputPlaceholder": "",
        "inputPattern": "\\d{3}",
        "inputMaxLength": "3",
        "inputFormatHint": "Ровно три цифры",
        "inputRequired": true
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd54",
        "inputId": "comment",
        "labelText": "Комментарий",
        "inputPlaceholder": "До 150 символов",
        "inputMaxLength": "150",
        "inputFormatHint": "Максимум 150 символов",
        "inputRequired": false
    },
    {
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd55",
        "inputId": "email",
        "labelText": "Почта",
        "inputPlaceholder": "Для квитанций об оплате",
        "inputPattern": ".+@.+\\..+",
        "inputFormatHint": "example@site.com",
        "inputRequired": false
    }
]