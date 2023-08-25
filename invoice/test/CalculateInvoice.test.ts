import CalculateInvoice from "../src/CalculateInvoice";
import CurrencyGateway from "../src/interfaces/CurrencyGateway";
import TransactionDAO from "../src/interfaces/TransactionDAO";

test("must calc the invoice", async function() {
    const transactionDAO: TransactionDAO = {
       async  getTransactions(cardNumber, month, year) {
           return [
            {  amount: 100, currency: "BRL" },
            {  amount: 600, currency: "USD" },
            {  amount: 1000, currency: "BRL" },
           ];
       },
    };

    const currencyGateway: CurrencyGateway = {
        async getCurrencies() {
            return { usd: 2 }
        }
    }
    const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
    const output = await calculateInvoice.execute("1234");
    expect(output.total).toBe(2300);
});