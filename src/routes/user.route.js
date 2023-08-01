import express from 'express';
import userController from '../controllers/user.controller.js';
import { validateId, validateUser } from '../middlewares/global.middleware.js';

const route = express.Router();

route.post("/users", userController.create);
route.get("/users", userController.findAll);
route.get("/users/:userId",validateId, validateUser, userController.findById);
route.patch("/users/:userId", validateId, validateUser, userController.update);
route.delete("/users/:userId", validateId, validateUser, userController.deleteById);

export default route;