import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

const app = express();
const port = 3000

dotenv.config();
connectDatabase();
app.use(express.json());
app.use("/api", userRoute);

app.listen(port, () => {
  console.log("App listening on port %d", port)
});