import axios from "axios";

import CurrencyGateway from "../interfaces/CurrencyGateway";

export default class CurrencyGatewayHttp implements CurrencyGateway {
    async getCurrencies(): Promise<any> {
        const response = await axios.get('http://localhost:3001/currencies');
        const currencies = response.data;
        return currencies;
    }

}