import React from 'react';

function About({ story, headline }) {
	return (
		<div class='container m-auto px-6'>
			<div class='lg:flex justify-between items-center'>
				<div class='lg:w-6/12 lg:p-0 p-7'>
					<h1 class='text-4xl sm:text-6xl text-gray-600 text-center mb-0 sm:mb-10'>
						{' '}
						{headline}{' '}
					</h1>
					<p class='text-xl text-center'> {story} </p>
				</div>
				<div class='lg:w-5/12 order-2'>
					<img
						src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
						alt=''
						class='rounded'
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
