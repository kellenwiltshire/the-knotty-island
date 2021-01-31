import React from 'react';
import Image from 'next/image';

function Splash(props) {
	return (
		<div className='bg-splash-lg bg-contain sm:bg-auto bg-center h-1/2 bg-no-repeat w-screen justify-items-center flex flex-row place-content-center'>
			<div className='bg-gray-300 bg-opacity-50 justify-center content-center flex h-full'>
				<Image src='/logo_large.png' alt='Logo' height={455} width={1024} />
			</div>
		</div>
	);
}

export default Splash;
