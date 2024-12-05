const mysql = require('mysql')

const mysqlconnection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"mysql",
    database:"studentms",
    port:"3306"
})

mysqlconnection.connect((err)=>{
    if(!err)
        console.log("DB Connection Started")
    else
        console.log("Connection Refused " + JSON.stringify(err))
})

module.exports=mysqlconnection;