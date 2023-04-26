export const handleChange = (e, setState) => {
	setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

// -----------------------------------

export const createBook = async (e, httpService, book, navigate) => {
	e.preventDefault();

	try {
		await httpService.post(
			'https://lector-api-production.up.railway.app/book/add',
			book
		);
		navigate('/home');
	} catch (err) {
		console.log(err);
	}
};

// -----------------------------------

export const updateBook = async (e, httpService, id, book, navigate) => {
	e.preventDefault();

	try {
		await httpService.put(
			'https://lector-api-production.up.railway.app/book/update/' + id,
			book
		);
		navigate('/home');
	} catch (err) {
		console.log(err);
	}
};

// -----------------------------------

export const deleteBook = async (httpService, id) => {
	try {
		await httpService.delete(
			'https://lector-api-production.up.railway.app/home/' + id
		);
		window.location.reload();
	} catch (err) {
		console.log(err);
	}
};

// -----------------------------------

export const handleSubmit = book => {
	const { title, description, cover, author } = book;

	if (
		title.length > 70 ||
		description.length > 300 ||
		cover.length > 300 ||
		author.length > 70
	) {
		return;
	}
};
