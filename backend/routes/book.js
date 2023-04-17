const express = require('express');
const db = require('../models/books.js');

const bookRouter = express.Router();

bookRouter.post('/add', (req, res) => {
	const sqlQuery =
		'INSERT INTO books (`title`, `description`, `cover`, `author`) VALUES (?)';

	const values = [
		req.body.title,
		req.body.description,
		req.body.cover,
		req.body.author
	];

	db.query(sqlQuery, [values], err => {
		if (err) return res.json(err);

		return res.send('The book was created succesfully! :D');
	});
});

bookRouter.put('/update/:id', (req, res) => {
	const bookId = req.params.id;

	const sqlQuery =
		'UPDATE books SET `title` = ?, `description`= ?, `cover`= ?, `author`= ? WHERE id = ?';

	const values = [
		req.body.title,
		req.body.description,
		req.body.cover,
		req.body.author
	];

	db.query(sqlQuery, [...values, bookId], err => {
		if (err) return res.json(err.message);

		return res.json('Book has been updated succesfully! ;)');
	});
});

module.exports = bookRouter;
