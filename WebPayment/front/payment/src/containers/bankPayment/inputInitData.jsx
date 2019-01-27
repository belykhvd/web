import validators from "../../redux/validators.jsx";

export default [
    {
        "key": "763d7ab9-0882-4df6-a3f0-35c043770f15",
        "inputType": "text",
        "inputId": "inn",
        "labelText": "От кого",
        "inputPlaceholder": "ИНН",
        "inputPattern": "\\d{10}(?:\\d{2})?",
        "inputMaxLength": "12",
        "inputFormatHint": "10 или 12 цифр",
        "inputRequired": true,
        "validator": validators.inn
    },
    {
        "key": "763d7ab9-0882-4df6-a3f0-35c043770f16",
        "inputType": "text",
        "inputId": "bic",
        "labelText": "БИК",
        "inputPlaceholder": "",
        "inputPattern": "\\d{9}",
        "inputMaxLength": "9",
        "inputFormatHint": "Ровно 9 цифр",
        "inputRequired": true,
        "validator": validators.bic
    },
    {
        "key": "763d7ab9-0882-4df6-a3f0-35c043770f17",
        "inputType": "text",
        "inputId": "accountNumber",
        "labelText": "Номер счета",
        "inputPlaceholder": "Назначение платежа",
        "inputPattern": "\\d{20}",
        "inputMaxLength": "20",
        "inputFormatHint": "Ровно 20 цифр",
        "inputRequired": true,
        "validator": validators.accountNumber
    },
    {
        "key": "763d7ab9-0882-4df6-a3f0-35c043770f18",
        "inputType": "select",
        "inputId": "vat",
        "labelText": "За что",
        "inputValues": ["Без НДС", "НДС 10%", "НДС 18%"],
        "optionKeys": [0, 1, 2],
        "inputPlaceholder": "",
        "inputPattern": ".+",
        "inputMaxLength": "",
        "inputFormatHint": "",
        "inputRequired": true
    },
    {
        "key": "763d7ab9-0882-4df6-a3f0-35c043770f19",
        "inputType": "text",
        "inputId": "sum",
        "labelText": "Сколько",
        "inputPlaceholder": "",
        "inputPattern": "\\d+",
        "inputMaxLength": "8",
        "inputFormatHint": "От 1000 до 75000 ₽",
        "inputRequired": true,
        "validator": validators.sum
    }
]