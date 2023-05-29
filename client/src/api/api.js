export const handleChange = (e, setState) => {
	setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

// -----------------------------------

export const createBook = async (e, httpService, book, navigate) => {
	e.preventDefault();

	try {
		await httpService.post(process.env.REACT_APP_API_URL + '/book/add', book);
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
			process.env.REACT_APP_API_URL + '/book/update/' + id,
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
		await httpService.delete(process.env.REACT_APP_API_URL + '/home/' + id);
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
