import React from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import { useLocation } from 'react-router-dom';

const Add = () => {
	const location = useLocation().pathname;

	return (
		<section className='px-8 md:px-28 xl:px-[15.294vw]'>
			<FormContainer location={location} />
		</section>
	);
};

export default Add;
