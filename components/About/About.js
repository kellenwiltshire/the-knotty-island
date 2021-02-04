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
		<div className='container m-10 px-1 sm:px-6'>
			<div className='lg:flex justify-between items-center'>
				<div className='lg:w-6/12 lg:p-0 p-7'>
					<h1 className='text-3xl sm:text-6xl text-center mb-0 sm:mb-10 font-title'>
						{' '}
						{headline}{' '}
					</h1>
					<p className='text-sm sm:text-xl sm:text-center leading-relaxed font-body'>
						{' '}
						{fixedStory}{' '}
					</p>
				</div>
				<div className='lg:w-5/12 order-2'>
					<Image
						src='/about_picture.jpg'
						alt=''
						height={500}
						width={500}
						classNameName='rounded'
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
