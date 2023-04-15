import React from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import { useLocation } from 'react-router-dom';

const Update = () => {
	const location = useLocation().pathname;

	return <FormContainer location={location} />;
};

export default Update;
