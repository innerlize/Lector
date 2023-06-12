const { Sequelize } = require('sequelize');

const db = new Sequelize(
	process.env.DATABASE,
	process.env.USER,
	process.env.PASSWORD,
	{
		host: process.env.HOST,
		port: process.env.DB_PORT,
		dialect: 'mysql'
	}
);

module.exports = db;
