const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Waiting Connection...");

    mongoose.connect("mongodb+srv://root:root@cluster0.xz5uzvv.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected!")).catch((error) => console.log(error));
    
};

module.exports = connectDatabase;