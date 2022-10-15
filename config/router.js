import express from "express";
import apiRoute from "../routes/api.js"
const route = express.Router()
route.use('/api/v1/', apiRoute);
export default route;