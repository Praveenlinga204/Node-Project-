const http = require("http");
const fs = require('fs');


const server = http.createServer((req,res)=>{
   let path = './docs/';  //C:\Users\Admin\OneDrive\Desktop\Nodeejs\docs


    if(req.url == "/home"){
        path += "index.html"
    }else if(req.url == '/about'){
        path += 'about.html'
    }
    fs.readFile(path,(err,data)=>{
        if(err){
                console.log(err.message)
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('server is listing')
})