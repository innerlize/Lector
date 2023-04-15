import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../../api/api';
import axios from 'axios';

const Book = ({ book }) => {
	const { id, title, description, cover, author } = book;

	return (
		<div>
			<img src={cover} alt={`${title} Cover Image`} />
			<div>{title}</div>
			<div>{description}</div>
			{author && <div>{author}</div>}

			<button>
				<Link to={`/book/update/${id}`}>Update Book</Link>
			</button>

			<button onClick={() => deleteBook(axios, id)}>Delete</button>
		</div>
	);
};

export default Book;
