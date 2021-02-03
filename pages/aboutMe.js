import React from 'react';
import Layout from '../components/Layout/Layout';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Splash from '../components/Splash/Splash';

function aboutMe() {
	return (
		<Layout title='The Knotty Island || About Me'>
			<Splash />
			<div className='flex flex-col'>
				<div className='container self-center flex justify-between flex-col'>
					<About />
					<Contact />
				</div>
			</div>
		</Layout>
	);
}

export default aboutMe;
