import "isomorphic-fetch"

export function processPaymentRequest(data)
{
    return (dispatch) => {
        let queryTrailer = '?';
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let backendKey = key.charAt(14).toLowerCase() + key.substring(15);
                queryTrailer += backendKey + '=' + data[key] + '&';
            }
        }
        queryTrailer = queryTrailer.substr(0, queryTrailer.length - 1);

        fetch(window.constants.processPaymentRequest + queryTrailer)
            .then((response) => {
                return response.json();
            });
    }
}