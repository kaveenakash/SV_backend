const express = require('express') 
const cors = require('cors') 
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())


//Connect to DB
require('./db/connectDB')

const apiRoutes = require('./routes/routes')
app.use("/api",apiRoutes)

const port = process.env.PORT
app.listen(port,() =>{
    console.log(`Server started port ${port}`)
})





