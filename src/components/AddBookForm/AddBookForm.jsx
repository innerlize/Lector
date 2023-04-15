import React, { useState } from 'react';
import { handleChange, createBook } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBookForm = () => {
	const [book, setBook] = useState({
		title: '',
		description: '',
		cover: null,
		author: ''
	});

	const navigate = useNavigate();

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

			<button onClick={e => createBook(e, axios, book, navigate)}>
				Add Book
			</button>
		</form>
	);
};

export default AddBookForm;
