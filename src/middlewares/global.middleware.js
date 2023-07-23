const mongoose = require("mongoose");
const userService = require("../services/user.service");

const validateId = (req, res, next) => {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
};

const validateUser = async (req, res, next) => {
    const userId = req.params.userId;

    const user = await userService.findUserById(userId);

    if (!user) {
        return res.status(400).send({ message: "User not found" });
    }

    req.userId = userId;
    req.user = user;

    next();
}

module.exports = { validateId, validateUser }