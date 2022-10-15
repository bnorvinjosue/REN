import express from "express"
import UserController from "../controllers/UserController.js";
const routes = express.Router()
const user = new UserController();
routes.get("/user/all", user.index);
routes.post("/user/create", user.store);
routes.delete("/user/destroy", user.destroy);
export default routes;