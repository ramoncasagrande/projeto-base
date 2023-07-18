const create = (req, res) => {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
            res.status(400).send({message: "Field error"});
    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            name,
            email,
            created: new Date()
        }
    });
}

module.exports = { create };