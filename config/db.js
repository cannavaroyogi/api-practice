'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host    : '127.0.0.1',
    user    : 'root',
    password: '',
    database: 'node_mysql_crud_db'
});

dbConn.connect(function (err) {
   if (err) throw err;
   console.log("Database connected"); 
});

module.exports = dbConn;