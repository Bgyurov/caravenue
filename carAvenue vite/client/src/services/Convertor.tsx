export const currencySetter = (currency) => {
    switch (currency) {
        case 'bgn':
            currency = 'Лв'
            break;
        case 'usd':
            currency = '$'
            break;
        case 'eur':
            currency = '€'
            break;
        default:
            break;
    }
    return currency
}