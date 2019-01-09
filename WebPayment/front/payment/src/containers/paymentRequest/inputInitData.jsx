export default [
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e689f",
        "inputType": "text",
        "inputId": "paymentRequestInn",
        "labelText": "ИНН получателя",
        "inputPlaceholder": "",
        "inputPattern": "",
        "inputMaxLength": "12",
        "inputFormatHint": "10 или 12 цифр",
        "inputRequired": true
    },
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e68A0",
        "inputType": "text",
        "inputId": "paymentRequestBic",
        "labelText": "БИК",
        "inputPlaceholder": "",
        "inputPattern": "",
        "inputMaxLength": "9",
        "inputFormatHint": "Ровно 9 цифр",
        "inputRequired": true
    },
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e68A1",
        "inputType": "text",
        "inputId": "paymentRequestAccountNumber",
        "labelText": "Номер счета",
        "inputPlaceholder": "Назначение платежа",
        "inputPattern": "",
        "inputMaxLength": "20",
        "inputFormatHint": "Ровно 20 цифр",
        "inputRequired": true
    },
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e68A2",
        "inputType": "select",
        "inputId": "paymentRequestVat",
        "labelText": "За что",
        "inputValues": ["Без НДС", "НДС 10%", "НДС 18%"],
        "inputPlaceholder": "",
        "inputPattern": "",
        "inputMaxLength": "",
        "inputFormatHint": "",
        "inputRequired": true
    },
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e68A3",
        "inputType": "text",
        "inputId": "paymentRequestSum",
        "labelText": "Сколько",
        "inputPlaceholder": "",
        "inputPattern": "",
        "inputMaxLength": "8",
        "inputFormatHint": "От 1000 до 75000 ₽",
        "inputRequired": true
    },
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e68A4",
        "inputType": "text",
        "inputId": "paymentRequestPhone",
        "labelText": "Номер телефона",
        "inputPlaceholder": "+7",
        "inputPattern": "",
        "inputMaxLength": "",
        "inputFormatHint": "",
        "inputRequired": true
    },
    {
        "key": "e919a613-45b1-4573-8f04-dc0c249e68A5",
        "inputType": "text",
        "inputId": "paymentRequestEmail",
        "labelText": "Эл.почта",
        "inputPlaceholder": "Для уведомлений об оплате",
        "inputPattern": "",
        "inputFormatHint": "example@site.com",
        "inputRequired": true
    }
]