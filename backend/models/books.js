const mysql = require('mysql2');

const db = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DATABASE
});

module.exports = db;
