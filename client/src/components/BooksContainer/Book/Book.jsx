import React from 'react';
import { Card, Button } from 'flowbite-react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../../api/api';
import axios from 'axios';

const Book = ({ book }) => {
	const { id, title, description, cover, author } = book;

	return (
		<div className='max-w-sm'>
			<Card imgAlt={`${title} Book Cover`} imgSrc={cover}>
				<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>
				<p className='font-normal text-gray-700 dark:text-gray-400'>
					{description}
				</p>
				<p className='font-normal text-gray-700 dark:text-gray-400'>
					{author ? author : '-Unknow Author-'}
				</p>

				<div className='flex justify-around h-full mt-5'>
					<Button>
						<Link to={`/book/update/${id}`}>Update Book</Link>
					</Button>
					<Button onClick={() => deleteBook(axios, id)} color='failure'>
						<TrashIcon class='h-5 w-5' />
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default Book;
