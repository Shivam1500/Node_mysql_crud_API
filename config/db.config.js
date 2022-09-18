const mysql = require('mysql');


// MYSQL Connection 
const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_mysql_crud_db"
});


dbConn.connect((err) => {
    if (err) throw error;
    console.log("Database connected")
});


module.exports = dbConn;


