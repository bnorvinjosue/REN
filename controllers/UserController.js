import User from "../models/User.js";
export default class UserController {
    async index(req, res) {
        const user = new User();
        const users = await user.findAll();
        res.json(users);
    }
    async store(req, res) {
        try {
            const user = new User()
            const response = await user.insert(req.body)
            res.json({ msg: "ok", result: response })
        } catch (error) {
            console.log(error);
            return res.status(403).json({ error: error.message });
        }
    }
    async show(req, res) {
        const user = new User();
        const result = await user.findOne({ id: req.params.id });
        res.json(result);
    }
    async update(req, res) {
        const user = new User();
        const result = await user.update({ id: req.params.id });
        res.json(result);
    }
    async destroy(req, res) {
        const user = new User();
        // return res.json(req.body.id)
        const result = await user.delete("id", req.body.id);
        res.json(result);
    }
}