import User from "../models/User.js";
export default class UserController {
    async index(req, res){
        const users = await User.findAll();
        res.json(users);
    }
    async store(req, res){
        const user = new User();
        user.data = req.body;
        const result = await user.save();
        res.json(result);
    }
    async show(req, res){
        const user = new User();
        const result = await user.findOne({id: req.params.id});
        res.json(result);
    }
    async update(req, res){
        const user = new User();
        const result = await user.update({id: req.params.id});
        res.json(result);
    }
    async destroy(req, res){
        const user = new User();
        const result = await user.delete({id: req.params.id});
        res.json(result);
    }
}