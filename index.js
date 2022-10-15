import "dotenv/config";
import rethinkdb from "rethinkdb"
import express from "express";
import User from "./models/User.js";
const r = rethinkdb;
const app = express();

// await result data and show in expre
app.get("/insert", async (req, res) => {
    const user = new User();
    user.data = {"name": "Juanito El Huerfanito", "email": "ninguno"};
    const result = await user.save();
    res.send(result);
});
app.get("",(req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

