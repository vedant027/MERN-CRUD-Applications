const express = require('express');
const myrouter = express.Router();
const connection = require('../db/dbconnection')

//get the data
myrouter.get("/recipe",(req,resp)=>{
    connection.query("select * from recipes",function(err,data){
        if(!err)
            resp.status(200).send(data);
        else
            resp.status(500).send("No data found")
    })
})


//add the data
myrouter.post("/recipe",(req,resp)=>{
    const {Title,Ingredients,Category} = req.body;
    connection.query("insert into recipes(Title,Ingredients,Category) values(?,?,?)",[Title,Ingredients,Category],function(err,data){
        if(!err)
            resp.status(200).send("New Recipe Added")
        else
            resp.status(500).send("No Recipe Found")
    })
})

//update the data
myrouter.put("/recipe/:id",(req,resp)=>{
    const {id} = req.params;
    const {Title,Ingredients,Category}=req.body;

    connection.query("update recipes set Title=?,Ingredients=?,Category=? where ID=?",[Title,Ingredients,Category,id],function(err,data){
        if(!err)
            resp.status(200).send("Recipe Updated")
        else
            resp.status(500).send("Recipe not found")
    })
}) 

//delete the data
myrouter.delete("/recipe/:id",(req,resp)=>{
    const {id}=req.params;

    connection.query("delete from recipes where id=?",[id],function(err,data){
        if(!err)
            resp.status(200).send("Deleted Succesfully")
        else
            resp.status(500).send("No Id found")
    })
})

module.exports=myrouter;