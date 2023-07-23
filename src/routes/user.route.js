const route = require('express').Router();
const userController = require('../controllers/user.controller');

route.post("/users", userController.create);
route.get("/users", userController.findAll);
route.get("/users/:userId", userController.findById);
route.patch("/users/:userId", userController.update);

module.exports = route;