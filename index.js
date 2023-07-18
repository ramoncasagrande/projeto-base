const express = require('express')
const app = express()
const userRoute = require('./src/routes/user.route')
const port = 3000

app.use("/api", userRoute)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})