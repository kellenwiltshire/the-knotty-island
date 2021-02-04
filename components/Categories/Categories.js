import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Categories() {
	const wallhanging_id = 29420565;
	const planthangers_id = 29695945;
	const accessories_id = 29679696;

	return (
		<div className='m-1 sm:m-5 flex flex-row flex-wrap justify-around w-full font-body'>
			<div className='bg-white w-28 sm:w-40 md:w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<Image
						src='/wallhanging.jpg'
						alt='Wallhaning Picture'
						height={800}
						width={600}
					/>
				</div>
				<div className='p-4 flex flex-col'>
					<h2 className='text-xs sm:text-base md:text-2xl uppercase text-center'>
						Wallhangings
					</h2>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: wallhanging_id, name: 'Wallhangings' },
						}}
					>
						<a className='text-xs sm:text-base md:text-2xl block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View
						</a>
					</Link>
				</div>
			</div>

			<div className='bg-white w-28 sm:w-40 md:w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<Image
						src='/planthanger.jpg'
						alt='Plant Hanger Picture'
						height={800}
						width={600}
					/>
				</div>
				<div className='p-4'>
					<h2 className='text-xs sm:text-base md:text-2xl uppercase text-center'>
						Plant Hangers
					</h2>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: planthangers_id, name: 'Plant Hangers' },
						}}
					>
						<a className='text-xs sm:text-base md:text-2xl block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View
						</a>
					</Link>
				</div>
			</div>

			<div className='bg-white w-28 sm:w-40 md:w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<Image
						src='/accessories.jpg'
						alt='Accessories Picture'
						height={800}
						width={600}
					/>
				</div>
				<div className='p-4'>
					<h2 className='text-xs sm:text-base md:text-2xl uppercase text-center'>
						Accessories
					</h2>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: accessories_id, name: 'Accessories' },
						}}
					>
						<a className='text-xs sm:text-base md:text-2xl block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Categories;
