const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require("./router/myrouter")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use("/",routes)

app.listen(4002,()=>{
    console.log("Server started at port 4002")
})

module.exports=app; 