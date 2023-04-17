import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { handleChange, createBook, handleSubmit } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBookForm = () => {
	const [book, setBook] = useState({
		title: '',
		description: '',
		cover: '',
		author: ''
	});

	const navigate = useNavigate();

	return (
		<form onSubmit={() => handleSubmit(book)}>
			<div>
				<div className='mb-2 block'>
					<Label htmlFor='title' value='Title' />
				</div>
				<TextInput
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

			<div>
				<div className='mb-2 block'>
					<Label htmlFor='description' value='Description' />
				</div>
				<TextInput
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

			<div>
				<div className='mb-2 block'>
					<Label htmlFor='cover' value='Cover' />
				</div>
				<TextInput
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

			<div>
				<div className='mb-2 block'>
					<Label htmlFor='author' value='Author (Optional)' />
				</div>
				<TextInput
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

			<button onClick={e => createBook(e, axios, book, navigate)}>
				Add Book
			</button>
		</form>
	);
};

export default AddBookForm;
