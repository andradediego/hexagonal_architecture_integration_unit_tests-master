import HttpClient from "../interfaces/HttpClient";

import axios from "axios";

export default class AxiosAdapter implements HttpClient {
    constructor () {
    }
    
    async get(url: string): Promise<any> {
        const response = await axios.get(url);
        return response.data;
    }

    async post(url: string, body: any): Promise<any> {
        const response = await axios.post(url, body);
        return response.data;
    }

}