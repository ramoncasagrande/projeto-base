const route = require('express').Router();
const userController = require('../controllers/user.controller');
const { validateId, validateUser } = require("../middlewares/global.middleware")

route.post("/users", userController.create);
route.get("/users", userController.findAll);
route.get("/users/:userId",validateId, validateUser, userController.findById);
route.patch("/users/:userId", validateId, validateUser, userController.update);

module.exports = route;