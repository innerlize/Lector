import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import { Loading, Error } from '../@FetchComponents/Index.jsx';
import Book from './Book/Book.jsx';

const BooksContainer = () => {
	const { books, loading, error } = useFetch(
		'https://lector-api-production.up.railway.app/home'
	);

	return (
		<div className='flex flex-wrap justify-around gap-4 mt-10'>
			{loading && <Loading />}

			{error && <Error error={error} />}

			{!loading && books.length === 0 ? (
				<div>There&apos;s not books yet ;/</div>
			) : (
				books?.map(book => {
					return <Book key={book.id} book={book} />;
				})
			)}
		</div>
	);
};

export default BooksContainer;
