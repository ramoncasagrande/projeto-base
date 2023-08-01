import User from '../models/User.js';

const create = (body) => User.create(body);

const findAllUsers = () => User.find();

const findUserById = (userId) => User.findById(userId);

const updateUser = (userId, name, email, password) => User.findOneAndUpdate({ _id: userId }, { name, email, password });

const deleteUser = (userId) => User.deleteOne({ _id: userId});

export default { create, findAllUsers, findUserById, updateUser, deleteUser };