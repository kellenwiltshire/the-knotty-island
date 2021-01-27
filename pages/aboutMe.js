import React from 'react';
import Layout from '../components/Layout/Layout';
import Contact from '../components/Contact/Contact';

function aboutMe(props) {
	return (
		<Layout>
			<div className='flex flex-col'>
				<Contact />
			</div>
		</Layout>
	);
}

export default aboutMe;
