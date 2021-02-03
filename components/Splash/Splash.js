import React from 'react';
import Image from 'next/image';

function Splash() {
	return (
		<div className='w-screen justify-items-center flex flex-row place-content-center mb-5'>
			<Image
				src='/splash_island.jpg'
				alt='Logo'
				className='object-cover bg-gray-300'
				width={1920}
				height={500}
				objectFit='cover'
			/>
		</div>
	);
}

export default Splash;
