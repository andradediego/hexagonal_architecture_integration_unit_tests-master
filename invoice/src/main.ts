import express from "express";
import CalculateInvoice from "./CalculateInvoice";

const app = express();

app.get("/cards/:cardNumber/invoices", async function (req, res) {
    const calculateInvoice = new CalculateInvoice();
    const total = await calculateInvoice.execute(req.params.cardNumber);
    
    res.json({
        total
    });
});

app.listen(3000);