const mysql= require("mysql2");
const connection= mysql.createConnection({
    host:"127.0.0.1",
    user: "root",
    password:"<password>",
    database: "student",

});

connection.connect((err) =>{
    if(err){
        console.log(`Database Error : ${err} `);
    }
    else{
        console.log(`Database connection successfull`);
    }
});

module.exports= {connection};
