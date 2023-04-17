import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import { Loading, Error } from '../@FetchComponents/Index.jsx';
import Book from './Book/Book.jsx';

const BooksContainer = () => {
	const { books, loading, error } = useFetch('http://localhost:8800/home');

	return (
		<div className='flex flex-wrap justify-around gap-4 mt-10'>
			{loading && <Loading />}

			{error && <Error error={error} />}

			{books?.map(book => {
				return <Book key={book.id} book={book} />;
			})}
		</div>
	);
};

export default BooksContainer;
