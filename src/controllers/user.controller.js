import userService from '../services/user.service.js';

const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).send({ message: "Field error" });
        }

        const user = await userService.create(req.body);

        if (!user) {
            return res.status(400).send({ message: "Error: User not created" })
        }


        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                email,
                created: user.created
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllUsers();

        if (users.length === 0) {
            return res.status(400).send({ message: "There are no users" })
        }

        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user;

        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const update = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userId = req.userId;
        const user = req.user;

        if (!name && !email && !password) {
            res.status(400).send({ message: "Nothing to update" });
        }

        await userService.updateUser(userId, name, email, password);

        res.send({ message: "User updated successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const deleteById = async (req, res) => {
    try {
        const userId = req.userId;

        await userService.deleteUser(userId);

        res.send({ message: "User deleted successfully" })
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { create, findAll, findById, update, deleteById }