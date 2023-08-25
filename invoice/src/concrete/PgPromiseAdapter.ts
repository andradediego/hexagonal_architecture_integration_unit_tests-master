import pgp from 'pg-promise';

import Connection from "../interfaces/Connection";

export default class PgPromiseAdapter implements Connection {
    connection: any;

    constructor () {
        this.connection = pgp()("postgres://postgres:123456@localhost:5432/diego");
    }
    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }
    close(): Promise<any> {
        return this.connection.$pool.end();
    }

}