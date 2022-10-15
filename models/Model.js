import connect, { table } from "../database/connection.js";
import rethinkdb from "rethinkdb";
const r = rethinkdb;

export default class Model {

    //constructor data optionals
    constructor(table) {
        this.table = table;
    }
    data = {};
    async save() {
        const connection = await connect();
        const result = await table(this.table).insert(this.data).run(connection);
        return result;
    }

    async insert(query) {
        const conn = await connect();
        const result = await table(this.table).insert(query).run(conn);
        return result;
    }
    async update(query) {
        const conn = await connect();
        const result = await table(this.table).update(query).run(conn);
        return result;
    }
    async delete(row, param) {
        const conn = await connect();
        const result = await table(this.table).filter(r.row(row).eq(param)).delete().run(conn);
        return result;
    }
    async find(query) {
        const conn = await connect();
        const result = await table(this.table).filter(query).run(conn);
        return result;
    }
    async findOne(query) {
        const conn = await connect();
        const result = await table(this.table).filter(query).limit(1).run(conn);
        return result;
    }
    async findAll() {
        const conn = await connect();
        const result = await table(this.table).run(conn);
        return result._responses;
    }
}