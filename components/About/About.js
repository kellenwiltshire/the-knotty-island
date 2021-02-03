import React, { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { requestAbout } from '../../actions';

function About() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestAbout());
	}, [dispatch]);
	const about = useSelector((state) => state.requestAbout.about);

	let headline = '';
	let story = '';

	if (!about.isError) {
		if (about.results) {
			headline = about.results[0].story_headline;
			story = about.results[0].story;
		}
	}
	let fixedStory = story.replace('&#39;', "'");
	return (
		<div class='container m-auto px-1 sm:px-6'>
			<div class='lg:flex justify-between items-center'>
				<div class='lg:w-6/12 lg:p-0 p-7'>
					<h1 class='text-2xl sm:text-6xl text-center mb-0 sm:mb-10'>
						{' '}
						{headline}{' '}
					</h1>
					<p class='text-sm sm:text-xl sm:text-center leading-relaxed'>
						{' '}
						{fixedStory}{' '}
					</p>
				</div>
				<div class='lg:w-5/12 order-2'>
					<Image
						src='/about_picture.jpg'
						alt=''
						height={500}
						width={500}
						className='rounded'
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
