const User = require('../models/User');

const create = (body) => User.create(body);

const findAllUsers = () => User.find();

const findUserById = (userId) => User.findById(userId);

module.exports = { create, findAllUsers, findUserById };