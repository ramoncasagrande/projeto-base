const userService = require('../services/user.service');
const mongoose = require('mongoose');

const create = async (req, res) => {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
            res.status(400).send({message: "Field error"});
    }

    const user = await userService.create(req.body);

    if (!user){
        return res.status(400).send({message: "Error: User not created"})
    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            email,
            created: user.created
        }
    });
}

const findAll = async (req, res) => {
    const users = await userService.findAllUsers();

    if (users.length === 0){
        return res.status(400).send({message: "There are no users"})
    }

    res.send(users);
}

const findById = async (req, res) => {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(400).send({message:"Invalid ID"})
    }

    const user = await userService.findUserById(userId);

    if(!user){
        return res.status(400).send({message:"User not found"})
    }

    res.send(user);

}

module.exports = { create, findAll, findById };