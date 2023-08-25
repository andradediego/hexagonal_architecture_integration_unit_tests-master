import express from "express";

// concrete implementation
import TransactionDAODatabase from "./concrete/TransactionDAODatabase";
import CurrencyGatewayHttp from "./concrete/CurrencyGatewayHttp";

import CalculateInvoice from "./CalculateInvoice";

const app = express();

app.get("/cards/:cardNumber/invoices", async function (req, res) {
    const transactionDAODatabase = new TransactionDAODatabase();
    const currencyGatewayHttp = new CurrencyGatewayHttp();
    const calculateInvoice = new CalculateInvoice(transactionDAODatabase, currencyGatewayHttp);
    const total = await calculateInvoice.execute(req.params.cardNumber);
    
    res.json({
        total
    });
});

app.listen(3000);