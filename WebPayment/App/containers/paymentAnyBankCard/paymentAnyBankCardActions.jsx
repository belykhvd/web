import "isomorphic-fetch"

export function processPaymentAnyBankCard(
    cardNumber, cardExpiration, cardCvc, transactionAmount, userComment, userEmail)
{
    return (dispatch) => {
        let queryTrailer =
            '?cardNumber=' + cardNumber +
            '&cardExpiration=' + cardExpiration +
            '&cardCvc=' + cardCvc +
            '&transactionAmount=' + transactionAmount +
            '&userComment=' + userComment +
            '&userEmail=' + userEmail;

        fetch(window.constants.processPaymentAnyBankCard + queryTrailer)
            .then((response) => {
                return response.json();
            });
    }
}