import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(url) {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		setLoading(true);

		axios
			.get(url)

			.then(({ data }) => {
				setBooks(data);
			})

			.catch(error => setError(error))

			.finally(() => setLoading(false));
	}, []);

	return { books, loading, error };
}
