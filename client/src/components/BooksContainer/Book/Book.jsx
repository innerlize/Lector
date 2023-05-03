import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../../api/api';
import axios from 'axios';

const Book = ({ book }) => {
	const { id, title, description, cover, author } = book;

	return (
		<div className='w-[100%] h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-[70%] xl:w-[30%]'>
			<div>
				<img
					className='rounded-t-lg w-[100%] max-h-[300px] object-cover md:max-h-[400px] xl:h-[350px]'
					src={cover}
					alt=''
				/>
			</div>

			<div className='p-5'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-[32px] md:mb-7 xl:text-[1.691vw]'>
					{title}
				</h5>

				<p className='mb-5 font-normal text-gray-700 dark:text-gray-400 md:text-[22px] md:mb-7 xl:text-[1.324vw]'>
					{description}
				</p>

				<em className='inline-block mb-3 font-normal text-gray-700 dark:text-gray-400 md:text-[22px] xl:text-[1.324vw]'>
					{author}
				</em>

				<div className='flex justify-evenly mt-5'>
					<button className='block bg-blue-700 text-white font-medium rounded-lg p-3 hover:bg-blue-800 md:p-5 xl:p-[0.882vw]'>
						<Link
							className='text-[20px] md:text-[24px] xl:text-[1.324vw]'
							to={`/book/update/${id}`}>
							Update Book
						</Link>
					</button>

					<button
						className='block text-[20px] bg-red-700 text-white font-medium rounded-lg p-3 hover:bg-red-800 md:p-5 md:text-[24px] xl:text-[1.324vw] xl:p-[0.882vw]'
						onClick={() => deleteBook(axios, id)}
						color='failure'>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default Book;
