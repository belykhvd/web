export function validationResult(isSuccess, formatHint) {
    return {isSuccess: isSuccess, formatHint: formatHint}
}
export function ok() {return validationResult(true)}
export function error(formatHint) {return validationResult(false, formatHint)}

export default {
    'cardNumber': value => {
      return value && value.match(/\d{16}/) ? ok() : error('Номер карты должен состоять из 16 цифр');
    },
    'accountNumber': value => {
      let formatHint = 'Номер счета должен состоять из 20 цифр';
      return value && value.length === 20 && value.match(/\d+/) ? ok() : error(formatHint);
    },
    'sum': value => {
        let formatHint = 'Сумма перевода должна быть от 1000 до 75000 ₽';
        let asFloat = parseFloat(value);
        if (isNaN(asFloat))
            return error(formatHint);

        return asFloat >= 1000 && asFloat <= 75000 ? ok() : error(formatHint);
    },
    'expiration': value => {
        let formatHint = 'Месяц/год действия карты должны быть в формате ММ/ГГ';
        if (!value || value.length !== 5 || value.charAt(2) !== '/')
            return error(formatHint);

        let mm = parseInt(value.substr(0, 2));
        let yy = parseInt(value.substr(3, 2));
        if (isNaN(mm) || isNaN(yy))
            return error(formatHint);

        return mm >= 1 && mm <= 12 && yy >= 19 && yy <= 35 ? ok() : error(formatHint);
    },
    'cvc': value => {
        return value && value.match(/\d{3}/) ? ok() : error('CVC должен состоять из 3 цифр');
    },
    'comment': value => {
        return value && value.length <= 150 ? ok() : error('Длина комментария не должна превышать 150 символов');
    },
    'email': value => {
        return value && value.match(/.+@.+\..+/) ? ok() : error('Email имеет неверный формат');
    },
    'inn': value => {
        return value && value.match(/\d{10}(?:\d{2})?/) ? ok() : error('ИНН должен состоять из 10 или 12 цифр');
    },
    'bic': value => {
        return value && value.match(/\d{9}/) ? ok() : error('БИК должен состоять из 9 цифр');
    },
    'vat': value => {
        let vatDomain = new Set(['Без НДС', '10%', '18%']);
        return value && vatDomain.has(value) ? ok() : error('Допустимые значения НДС: без НДС, 10%, 18%');
    },
    'phone': value => {
        return ok();
    }
}