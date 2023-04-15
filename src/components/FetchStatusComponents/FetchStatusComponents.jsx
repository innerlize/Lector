import React from 'react';

export function ErrorComponent({ error }) {
	return (
		<div>
			{error.response && <p>Error Code: {error.response.status}</p>}

			<p>{error.message}</p>
		</div>
	);
}

export function LoadingComponent() {
	return (
		<div>
			<p>Loading...</p>
		</div>
	);
}
