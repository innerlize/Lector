const express = require('express');
const Book = require('../models/books.js');

const bookRouter = express.Router();

bookRouter.post('/add', async (req, res) => {
	const { title, description, cover, author } = req.body;

	const newBook = await Book.create({
		title,
		description,
		cover,
		author
	});

	return res.json({
		message: 'The book was created succesfully! :D',
		data: newBook
	});
});

bookRouter.put('/update/:id', async (req, res) => {
	const bookId = req.params.id;

	const { title, description, cover, author } = req.body;

	const updatedBook = await Book.update(
		{ title, description, cover, author },
		{ where: { id: bookId } }
	);

	return res.json({
		message: 'Book has been updated succesfully! ;)',
		data: updatedBook
	});
});

module.exports = bookRouter;
