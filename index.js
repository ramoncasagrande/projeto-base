import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';

const app = express();
const port = 3000

connectDatabase();
app.use(express.json());
app.use("/api", userRoute);

app.listen(port, () => {
  console.log("App listening on port %d", port)
});