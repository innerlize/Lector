const express = require('express');
const db = require('../models/books.js');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
	const sqlQuery = 'SELECT * FROM lector.books';

	db.query(sqlQuery, (err, data) => {
		if (err) return res.json(err);

		return res.json(data);
	});
});

homeRouter.delete('/:id', (req, res) => {
	const bookId = req.params.id;
	console.log(req.params);

	const sqlQuery = 'DELETE FROM books WHERE id = ?';

	db.query(sqlQuery, [bookId], err => {
		if (err) return res.json(err.message);

		return res.json('Book has been deleted succesfully >;D');
	});
});

module.exports = homeRouter;
