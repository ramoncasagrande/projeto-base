const User = require('../models/User');

const create = (body) => User.create(body);

const findAllUsers = () => User.find();

const findUserById = (userId) => User.findById(userId);

const updateUser = (userId, name, email, password) => User.findOneAndUpdate({ _id: userId }, { name, email, password });

module.exports = { create, findAllUsers, findUserById, updateUser };