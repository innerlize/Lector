import React, { useState } from 'react';
import { handleChange, updateBook, handleSubmit } from '../../../../api/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextInput } from 'flowbite-react';
import axios from 'axios';

const styles = {
	textInput: {
		color: '#000000',
		fontSize: '16px'
	}
};

const UpdateBookForm = () => {
	const [book, setBook] = useState({
		title: '',
		description: '',
		cover: '',
		author: ''
	});

	const navigate = useNavigate();
	const location = useLocation();

	const bookId = location.pathname.split('/')[3];

	return (
		<form
			className='text-[18px] font-medium text-white bg-blue-700 p-10 rounded-lg md:text-[26px] xl:text-[20px] xl:p-5'
			onSubmit={() => handleSubmit(book)}>
			<div className='mb-5'>
				<label className='mb-2 block' htmlFor='title'>
					Title
				</label>

				<TextInput
					style={styles.textInput}
					id='title'
					name='title'
					placeholder='It Ends With Us'
					required={true}
					onChange={e => handleChange(e, setBook)}
					color={book.title.length > 70 && 'failure'}
					helperText={
						book.title.length > 70 && (
							<>
								<span className='font-medium'>Oops!</span> Title too long.
							</>
						)
					}
				/>
			</div>

			<div className='mb-5'>
				<label className='mb-2 block' htmlFor='description'>
					Description
				</label>
				<TextInput
					style={styles.textInput}
					id='description'
					name='description'
					placeholder="A brave and heartbreaking novel that digs its claws into you and doesn't let go..."
					required={true}
					onChange={e => handleChange(e, setBook)}
					color={book.description.length > 300 && 'failure'}
					helperText={
						book.description.length > 300 && (
							<>
								<span className='font-medium'>Oops!</span> Description too long.
							</>
						)
					}
				/>
			</div>

			<div className='mb-5'>
				<label className='mb-2 block' htmlFor='cover'>
					Cover
				</label>

				<TextInput
					style={styles.textInput}
					id='cover'
					name='cover'
					placeholder='https://oaklandpostonline.com/wp-content/uploads/2022/06/91OT29EvAXL-597x900.jpg'
					required={true}
					onChange={e => handleChange(e, setBook)}
					color={book.cover.length > 300 && 'failure'}
					helperText={
						book.cover.length > 300 && (
							<>
								<span className='font-medium'>Oops!</span> Cover too long.
							</>
						)
					}
				/>
			</div>

			<div className='mb-5'>
				<label className='mb-2 block' htmlFor='author'>
					Author (Optional)
				</label>

				<TextInput
					style={styles.textInput}
					id='author'
					name='author'
					placeholder='Colleen Hoover'
					onChange={e => handleChange(e, setBook)}
					required={true}
					color={book.author.length > 70 && 'failure'}
					helperText={
						book.author.length > 70 && (
							<>
								<span className='font-medium'>Oops!</span> Author name too long.
							</>
						)
					}
				/>
			</div>

			<button
				className='block bg-green-500 px-6 py-4 mx-auto mt-7 rounded-lg hover:bg-green-600'
				onClick={e => updateBook(e, axios, bookId, book, navigate)}>
				Update Book
			</button>
		</form>
	);
};

export default UpdateBookForm;
