const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log('Request Response 1');
    console.log(req.host);
   
    next()
})

app.get("/home",(req,res)=>{
   res.sendFile("./docs/index.html",{root:__dirname})
})



app.get("/about",(req,res)=>{
   res.sendFile("./docs/about.html",{root:__dirname})
})
app.listen(5001)
