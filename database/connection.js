import rethinkdb from "rethinkdb"
import driver  from "../config/database.js";
const r = rethinkdb;
var connection = null;
async function connect() {
    if (connection) return connection;
    connection = await r.connect({ host: driver.host, port: driver.port });
    return connection;
}
export const table =t=>r.db(driver.db).table(t);

export default connect;
