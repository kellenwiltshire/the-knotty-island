import React from 'react';
import Image from 'next/image';

function Splash(props) {
	return (
		<div className='sm:bg-splash-lg bg-auto bg-center bg-no-repeat w-screen justify-items-center flex flex-row place-content-center'>
			{/* <div className='self-center'>
				<Image
					src='/logo_large.png'
					alt='Logo'
					className='object-contain bg-gray-300'
					width={682}
					height={303}
				/>
			</div> */}
		</div>
	);
}

export default Splash;
