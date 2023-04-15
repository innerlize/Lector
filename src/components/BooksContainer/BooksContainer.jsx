import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import {
	LoadingComponent,
	ErrorComponent
} from '../FetchStatusComponents/FetchStatusComponents.jsx';
import Book from './Book/Book.jsx';

const BooksContainer = () => {
	const { books, loading, error } = useFetch('http://localhost:8800/home');

	return (
		<div>
			{loading && <LoadingComponent />}

			{error && <ErrorComponent error={error} />}

			{books?.map(book => {
				return <Book key={book.id} book={book} />;
			})}
		</div>
	);
};

export default BooksContainer;
