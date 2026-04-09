const express = require("express")


const app = express()
app.use(express.json())


const port = 5000;

app.use("/api/contacts",require("./Routes/contactRoutes"))



app.listen(port,()=>{
    console.log(`server is listining http://localhost:${port}`)
})