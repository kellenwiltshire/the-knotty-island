import React from 'react';
import Layout from '../components/Layout/Layout';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';

function aboutMe({ data }) {
	const headline = data.results[0].story_headline;
	const story = data.results[0].story;
	return (
		<Layout title='The Knotty Island || About Me'>
			<div className='flex flex-col'>
				<div className='bg-splash-md bg-auto bg-center h-1/6 bg-no-repeat w-screen justify-items-center bg-gray-300 mb-3'></div>
				<div className='container self-center flex justify-between flex-col'>
					<About headline={headline} story={story} />
					<Contact />
				</div>
			</div>
		</Layout>
	);
}

export default aboutMe;

export async function getStaticProps(context) {
	try {
		const res = await fetch('http://LOCALHOST:3000/aboutme');
		const data = await res.json();
		return {
			props: { data },
		};
	} catch (error) {
		console.log(error);
	}
}
