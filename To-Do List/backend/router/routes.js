const express = require('express');
const myroute = express.Router();
const connection = require('../db/dbconnection');

myroute.get("/todos",(req,resp)=>{
    connection.query("select * from list",function(err,data,fields){
        if(!err)
            resp.status(200).send(data)
        else
            resp.status(500).send("no data found")
    })
})

myroute.post("/todos",(req,resp)=>{
    const {id,title,description,status}=req.body
    console.log(req.body)
    connection.query("insert into list values(?,?,?,?)",[id,title,description,status],function(err,data){
        if(!err)
            resp.status(200).send("New Task Added")
        else
            resp.status(500).send("no data added")
    })
})

myroute.put("/todos/:id",(req,resp)=>{
    const {title,description,status}=req.body
    connection.query("update list set title=?,description=?,status=? where id=?",[title,description,status,req.params.id],function(err,data){
        if(!err)
            resp.status(200).send("Task Updated Successfully");
        else
            resp.status(500).send("Data Not found")
    })
})

myroute.delete("/todos/:id",(req,resp)=>{
    const {id} = req.params;
    
    connection.query("delete from list where id=?",[id],function(err,data){
        if(!err)
            resp.status(200).send("Task Deleted")
        else
            resp.status(500).send("Id not Found")
    })
})

myroute.patch("/todos/:id",(req,resp)=>{
    const {id} = req.params;

    connection.query("update list set status='Completed' where id=?",[id],function(err,data){
        if(!err)
            resp.status(200).send("Task Completed")
        else
            resp.send(500).send("Id not Found")
    })
})

module.exports=myroute;