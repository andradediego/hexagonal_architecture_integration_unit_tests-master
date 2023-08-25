import pgp from 'pg-promise';

import TransactionDAO from "../interfaces/TransactionDAO";

export default class TransactionDAODatabase implements TransactionDAO {
    
    async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/diego");
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
        const transactions = await connection.query(query, params);
        return transactions;
    }    

}