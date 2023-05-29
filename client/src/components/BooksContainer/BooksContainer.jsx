import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import { Loading, Error } from '../@FetchComponents/Index.jsx';
import Book from './Book/Book.jsx';

const BooksContainer = () => {
	const { books, loading, error } = useFetch(
		process.env.REACT_APP_API_URL + '/home'
	);

	return (
		<div className='flex flex-wrap justify-center gap-10 p-8 xl:p-0'>
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
