import HttpServer from "../interfaces/HttpServer";

import CalculateInvoice from "../CalculateInvoice";

export default class InvoiceController {
    constructor (
            readonly httpServer: HttpServer,
            readonly calculateInvoice: CalculateInvoice
        ) {
        
        httpServer.register('get', "/cards/:cardNumber/invoices", async function (params: any, body: any) {
            const total = await calculateInvoice.execute(params.cardNumber);            
            return total;
        });
    }
}