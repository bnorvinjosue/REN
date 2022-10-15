import "dotenv/config";
import express from "express";
import route from "./config/router.js";
const app = express();

// await result data and show in expre
app.use(express.json());
app.use('', route)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});