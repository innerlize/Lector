const { DataTypes } = require('sequelize');
const db = require('../database');

const Book = db.define(
	'Books',

	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			unique: true,
			allowNull: false
		},

		title: {
			type: DataTypes.STRING(70),
			allowNull: false
		},

		description: {
			type: DataTypes.STRING(500),
			allowNull: false
		},

		cover: {
			type: DataTypes.STRING(500),
			allowNull: false
		},

		author: {
			type: DataTypes.STRING(70),
			allowNull: true
		}
	},

	{
		timestamps: false
	}
);

module.exports = Book;
