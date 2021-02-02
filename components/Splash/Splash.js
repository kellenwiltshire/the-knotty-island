import React from 'react';
import Image from 'next/image';

function Splash() {
	return (
		<div className='bg-auto bg-center bg-no-repeat w-screen justify-items-center flex flex-row place-content-center'>
			<Image
				src='/splash_island.jpg'
				alt='Logo'
				className='object-cover bg-gray-300'
				width={1364}
				height={303}
				objectFit='cover'
			/>
		</div>
	);
}

export default Splash;
