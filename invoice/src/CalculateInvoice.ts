import TransactionDAO from "./interfaces/TransactionDAO";
import CurrencyGateway from "./interfaces/CurrencyGateway";
import Invoice from "./concrete/Invoice";

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

        const invoice = new Invoice(transactions, currencies);
        
        const total = invoice.getTotal();

        return {
            total
        };
    }
}