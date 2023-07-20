const User = require('../models/User');

const create = (body) => User.create(body);

const findAllUsers = () => User.find();

module.exports = { create, findAllUsers };