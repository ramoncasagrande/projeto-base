import { loginService, generateToken } from "../services/auth.service.js";
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await loginService(email);

        if(!user){
            return res.status(400).send({message: "Invalid user or password"});
        }

        const validatePassword = bcrypt.compareSync(password, user.password);

        if(!validatePassword){
            return res.status(400).send({message: "Invalid user or password"});
        }

        const token = generateToken(user.id);

        res.send({token});

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export { login }