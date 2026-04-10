const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbconnection.js")
const dotenv = require("dotenv").config()




const app = express()
app.use(express.json())
app.use(errorHandler)
connectDB()


const port =5001;

app.use("/api/contacts",require("./Routes/contactRoutes"))



app.listen(port,()=>{
    console.log(`server is listining http://localhost:${port}`)
})