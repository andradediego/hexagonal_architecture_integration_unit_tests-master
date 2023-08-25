import TransactionDAO from "./interfaces/TransactionDAO";
import CurrencyGateway from "./interfaces/CurrencyGateway";

export default class CalculateInvoice {
    constructor (
            readonly transactionDAO: TransactionDAO,
            readonly currencyGateway: CurrencyGateway
        ) {

    }

    async execute (cardNumber: string) {
        const today = new Date();
        const currentMonth = today.getMonth() +1;
        const currentYear = today.getFullYear();
        
        const transactions = await this.transactionDAO.getTransactions(cardNumber, currentMonth, currentYear);
        const currencies = await this.currencyGateway.getCurrencies();
        
        let total = 0;
        for (const transaction of transactions) {
            switch (transaction.currency) {
                case 'USD':
                    total += parseFloat(transaction.amount) * currencies.usd;
                    break;
                    
                    default:
                    total += parseFloat(transaction.amount);
                    break;
            }
        }

        return total;
    }
}