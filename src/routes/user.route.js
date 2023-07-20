const route = require('express').Router();
const userController = require('../controllers/user.controller');

route.post("/users", userController.create);
route.get("/users", userController.findAll);

module.exports = route;