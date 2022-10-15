import connect,{table} from "../database/connection.js";

export default class Model{

    //constructor data optionals
    constructor(table){
        this.table = table;
    }
    data = {};
    async save(){
        const connection = await connect();
        const result = await table(this.table).insert(this.data).run(connection);
        return result;
    }

    static async insert(query){
        const conn = await connect();
        const result = await table(this.table).insert(query).run(conn);
        return result;
    }
    static async update(query){
        const conn = await connect();
        const result = await table(this.table).update(query).run(conn);
        return result;
    }
    static async delete(query){
        const conn = await connect();
        const result = await table(this.table).delete(query).run(conn);
        return result;
    }
    static async find(query){
        const conn = await connect();
        const result = await table(this.table).filter(query).run(conn);
        return result;
    }
    static async findOne(query){
        const conn = await connect();
        const result = await table(this.table).filter(query).limit(1).run(conn);
        return result;
    }
    static async findAll(){
        const conn = await connect();
        const result = await table(this.table).run(conn);
        return result;
    }
}