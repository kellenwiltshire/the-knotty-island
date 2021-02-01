import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function aboutMe() {
	const about = useSelector((state) => state.requestAbout.about);

	let headline = '';
	let story = '';

	if (!about.isError) {
		if (about.results) {
			headline = about.results[0].story_headline;
			story = about.results[0].story;
		}
	}
	return (
		<Layout title='The Knotty Island || About Me'>
			<div className='flex flex-col'>
				<div className='bg-auto bg-center bg-no-repeat w-screen justify-items-center bg-gray-300 mb-3 self-center'>
					<Image
						src='/logo_med.png'
						alt='Logo'
						height={300}
						width={300}
						className='self-center'
					/>
				</div>
				<div className='container self-center flex justify-between flex-col'>
					<About headline={headline} story={story} />
					<Contact />
				</div>
			</div>
		</Layout>
	);
}

export default aboutMe;
