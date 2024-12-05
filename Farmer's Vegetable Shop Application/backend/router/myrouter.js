const express = require('express');
const myrouter = express.Router();
const connection = require('../db/dbConnection')

myrouter.get("/vegetables",(req,resp)=>{
    connection.query("select * from vegetables",function(err,data){
        if(!err)
            resp.status(200).send(data);
        else
            resp.status(500).send("No Data Found")
    })
})

myrouter.post("/vegetables",(req,resp)=>{
    const {vegetable_name,vegetable_type,quantity,price}=req.body;
    connection.query("insert into vegetables values(default,?,?,?,?)",[vegetable_name,vegetable_type,quantity,price],function(err,data){
        if(!err)
            resp.status(200).send("New Vegetable Added");
        else
            resp.status(500).send("No Data Added")
    })
})

myrouter.put("/vegetables/:id",(req,resp)=>{
    const {id} = req.params;
    const {vegetable_name,vegetable_type,quantity,price}=req.body;
    connection.query("update vegetables set vegetable_name=?,vegetable_type=?,quantity=?,price=? where id=?",[vegetable_name,vegetable_type,quantity,price,id],function(err,data){
        if(!err)
            resp.status(200).send("Vegetable Details Update");
        else
            resp.status(500).send("Vegetable Id not found")
    })
})


myrouter.delete("/vegetables/:id",(req,resp)=>{
    const {id} = req.params;

    connection.query("delete from vegetables where id=?",[id],function(err,data){
        if(!err)
            resp.status(200).send("Vegetable Deleted");
        else
            resp.status(500).send("Vegetable Id not found")
    })
})

module.exports=myrouter;