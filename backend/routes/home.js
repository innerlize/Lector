const express = require('express');
const Book = require('../models/books');

const homeRouter = express.Router();

homeRouter.get('/', async (req, res) => {
	const books = await Book.findAll();

	return res.json(books);
});

homeRouter.delete('/:id', async (req, res) => {
	const bookId = req.params.id;

	const deletedBook = await Book.destroy({ where: { id: bookId } });

	return res.json({
		message: 'Book has been deleted succesfully >;D',
		data: deletedBook
	});
});

module.exports = homeRouter;
