const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'mysql',
    database:'recipebook',
    port:'3306'
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connection Started")
    }
    else{
        console.log("Connection Failed ",JSON.stringify(err))
    }
})

module.exports=mysqlConnection;