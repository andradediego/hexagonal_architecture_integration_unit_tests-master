export default class Invoice {
    constructor (
        readonly transactions: any,
        readonly currencies: any
        ) {

    }

    getTotal () {
        let total = 0;
        for (const transaction of this.transactions) {
            switch (transaction.currency) {
                case 'USD':
                    total += parseFloat(transaction.amount) * this.currencies.usd;
                    break;
                    
                    default:
                    total += parseFloat(transaction.amount);
                    break;
            }
        }

        return total;
    }
}