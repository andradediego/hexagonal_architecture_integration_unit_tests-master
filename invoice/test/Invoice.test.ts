import Invoice from "../src/concrete/Invoice";

test("must calc the invoice", function() {
    const transactions = [
        {  amount: 300, currency: "BRL" },
        {  amount: 400, currency: "USD" },
        {  amount: 900, currency: "BRL" },
    ];
    const currencies = {
        usd: 2
    };
    const invoice = new Invoice(transactions, currencies);
    const total = invoice.getTotal();
    expect(total).toBe(2000);
});