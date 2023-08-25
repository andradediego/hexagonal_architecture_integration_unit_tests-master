import axios from "axios";
import pgp from 'pg-promise';
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
        
        // const connection = pgp()("postgres://postgres:123456@localhost:5432/diego");
        // const query = `select * 
        //                 from diego.card_transaction 
        //                 where card_number = $1
        //                     and extract(month from date) = $2
        //                     and extract(year from date) = $3`;
        // const params = [
        //     cardNumber,
        //     currentMonth,
        //     currentYear
        // ];
        // const transactions = await connection.query(query, params);
        
        // const response = await axios.get('http://localhost:3001/currencies');
        // const currencies = response.data;
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