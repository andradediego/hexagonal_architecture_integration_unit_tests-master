import TransactionDAO from "../interfaces/TransactionDAO";
import Connection from '../interfaces/Connection';

export default class TransactionDAODatabase implements TransactionDAO {

    constructor (
        readonly connection: Connection
    ) {

    }
    
    async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
        
        const query = `select * 
                        from diego.card_transaction 
                        where card_number = $1
                            and extract(month from date) = $2
                            and extract(year from date) = $3`;
        const params = [
            cardNumber,
            month,
            year
        ];
        const transactions = await this.connection.query(query, params);
        return transactions;
    }    

}