const express = require('express')
const myroute = express.Router();
const connection = require('../db/dbconnection')

myroute.get("/students",(req,resp)=>{
    connection.query("select * from students",function(err,data){
        if(!err)
            resp.status(200).send(data);
        else
            resp.status(500).send("Data Not Found");
    })
})

myroute.post("/students",(req,resp)=>{
    const {name,email,mobileNo,courseEnrolled}=req.body;
    connection.query("insert into students values(default,?,?,?,?)",[name,email,mobileNo,courseEnrolled],function(err,data){
        if(!err)
            resp.status(200).send("Student Successfully Added")
        else
            resp.status(500).send("No Data Found")
    })
})

myroute.put("/students/:id",(req,resp)=>{
    const {id}=req.params;
    const {name,email,mobileNo,courseEnrolled}=req.body;

    connection.query("update students set name=?,email=?,mobileNo=?,courseEnrolled=? where studentId=?",[name,email,mobileNo,courseEnrolled,id]
        ,function(err,data){
            if(!err)
                resp.status(200).send("Student Details Updated");
            else
                resp.status(500).send("Invalid Entry")
    })
})

myroute.delete("/students/:id",(req,resp)=>{
    const {id} = req.params;

    connection.query("delete from students where studentId=?",[id],function(err,data){
        if(!err)
            resp.status(200).send("Student Deleted")
        else
            resp.status(500).send("Student Id Invalid")
    })
})

module.exports=myroute;