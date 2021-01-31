import React from 'react';
import Image from 'next/image';

function About({ story, headline }) {
	return (
		<div class='container m-auto px-6'>
			<div class='lg:flex justify-between items-center'>
				<div class='lg:w-6/12 lg:p-0 p-7'>
					<h1 class='text-2xl sm:text-6xl text-gray-600 text-center mb-0 sm:mb-10'>
						{' '}
						{headline}{' '}
					</h1>
					<p class='text-sm sm:text-xl text-center'> {story} </p>
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
