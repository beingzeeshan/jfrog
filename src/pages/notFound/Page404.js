import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
	<div>
		<p>Page 404</p>
		<Link to="/" replace>
			Go Main
		</Link>
	</div>
);

export default Page404;
