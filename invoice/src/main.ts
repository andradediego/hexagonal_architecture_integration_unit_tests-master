

// concrete implementation
import TransactionDAODatabase from "./concrete/TransactionDAODatabase";
import CurrencyGatewayHttp from "./concrete/CurrencyGatewayHttp";
import AxiosAdapter from "./concrete/AxiosAdapter";
import PgPromiseAdapter from "./concrete/PgPromiseAdapter";

import CalculateInvoice from "./CalculateInvoice";
import InvoiceController from "./concrete/InvoiceController";
import ExpressAdapter from "./concrete/ExpressAdapter";


const connection = new PgPromiseAdapter();
const transactionDAODatabase = new TransactionDAODatabase(connection);
const httpClient = new AxiosAdapter();
const baseUrl = 'http://localhost:3001';
const currencyGatewayHttp = new CurrencyGatewayHttp(httpClient, baseUrl);
const calculateInvoice = new CalculateInvoice(transactionDAODatabase, currencyGatewayHttp);

const httpServer = new ExpressAdapter();
const invoiceController = new InvoiceController(httpServer, calculateInvoice);

httpServer.listen(3000);
