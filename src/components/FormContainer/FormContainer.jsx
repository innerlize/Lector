import React from 'react';
import { AddBookForm, UpdateBookForm } from './Forms/Index.jsx';

function FormContainer({ location }) {
	if (location === '/book/add') return <AddBookForm />;

	if (location.includes('/book/update/')) return <UpdateBookForm />;
}

export default FormContainer;
