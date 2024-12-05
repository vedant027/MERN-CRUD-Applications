const mysql = require('mysql')

const mysqlconnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'mysql',
    database:'library',
    port:'3306'
})

mysqlconnection.connect((err)=>{
    if(!err){
        console.log("Connection Done");
    }
    else{
        console.log("Connection Failed: " + JSON.stringify(err))
    }
})

module.exports=mysqlconnection;

