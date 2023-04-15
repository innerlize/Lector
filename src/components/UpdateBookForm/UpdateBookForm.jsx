import React, { useState } from 'react';
import { handleChange, updateBook } from '../../api/api';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const UpdateBookForm = () => {
	const [book, setBook] = useState({
		title: '',
		description: '',
		cover: null,
		author: ''
	});

	const navigate = useNavigate();
	const location = useLocation();

	const bookId = location.pathname.split('/')[3];

	return (
		<form>
			<input
				type='text'
				placeholder='Title'
				name='title'
				onChange={e => handleChange(e, setBook)}
			/>
			<input
				type='text'
				placeholder='Description'
				name='description'
				onChange={e => handleChange(e, setBook)}
			/>
			<input
				type='text'
				placeholder='Cover'
				name='cover'
				onChange={e => handleChange(e, setBook)}
			/>
			<input
				type='text'
				placeholder='Author (Optional)'
				name='author'
				onChange={e => handleChange(e, setBook)}
			/>

			<button onClick={e => updateBook(e, axios, bookId, book, navigate)}>
				Update Book
			</button>
		</form>
	);
};

export default UpdateBookForm;
