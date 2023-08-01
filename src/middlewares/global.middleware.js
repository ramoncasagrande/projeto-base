import mongoose from 'mongoose';
import userService from '../services/user.service.js';

const validateId = (req, res, next) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send({ message: "Invalid ID" });
        }

        next();
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const validateUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const user = await userService.findUserById(userId);

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        req.userId = userId;
        req.user = user;

        next();
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export { validateId, validateUser }