import React from 'react';
import Layout from '../components/Layout/Layout';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';

function aboutMe({ data }) {
	const headline = data.results[0].story_headline;
	const story = data.results[0].story;
	console.log('story: ', story);
	return (
		<Layout>
			<div className='flex flex-col'>
				<About headline={headline} story={story} />
				<Contact />
			</div>
		</Layout>
	);
}

export default aboutMe;

export async function getServerSideProps(conext) {
	const etsyAPI = 'jf8evf2p7kh6ihl16tew41k4';
	try {
		const res = await fetch(
			`https://openapi.etsy.com/v2//shops/TheKnottyIsland/about?api_key=${etsyAPI}`,
		);
		const data = await res.json();
		return {
			props: { data },
		};
	} catch (error) {
		console.log(error);
	}
}
