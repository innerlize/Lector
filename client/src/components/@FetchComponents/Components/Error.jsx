import React from 'react';

function Error({ error }) {
	return (
		<div>
			{error.response && <p>Error Code: {error.response.status}</p>}

			<p>{error.message}</p>
		</div>
	);
}

export default Error;
