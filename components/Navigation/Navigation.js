import React from 'react';
import Link from 'next/link';

const Navigation = () => {
	return (
		<nav className='bg-white rounded-b-md fixed shadow max-w-screen-xl z-10 mx-auto inset-x-0 top-0 flex justify-between items-center font-body'>
			<Link href='/'>
				<button className='m-3 inline-flex hover:text-gray-500 transition-all duration-500 font-title'>
					The Knotty Island
				</button>
			</Link>

			{/* <!-- List of nav item --> */}
			<Link href='/aboutMe'>
				<a className='text-sm sm:text-base mx-2 sm:mx-2 my-2 border-b-2 border-transparent hover:border-gray-500 hover:text-gray-500 transition-all duration-500 py-1 sm:p-0'>
					About Me
				</a>
			</Link>
		</nav>
	);
};

export default Navigation;
