const express = require("express")
const router = require("../src/routers/routing")
const cors = require('cors')
require("../src/db/conn")

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log(`connnection is live at port no. ${port}`)
})