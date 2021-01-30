import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Categories() {
	const wallhanging_id = 29420565;
	const planthangers_id = 29695945;
	const accessories_id = 29679696;

	return (
		<div className='m-5 flex flex-row flex-wrap justify-around w-full'>
			<div className='bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<Image
						src='/wallhanging.jpg'
						alt='Wallhaning Picture'
						height={400}
						width={300}
					/>
				</div>
				<div className='p-4'>
					<h2 className='text-2xl uppercase'>Wallhangings</h2>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: wallhanging_id },
						}}
					>
						<a className='block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View Wallhangings
						</a>
					</Link>
				</div>
			</div>

			<div className='bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<Image
						src='/planthanger.jpg'
						alt='Plant Hanger Picture'
						height={400}
						width={300}
					/>
				</div>
				<div className='p-4'>
					<h2 className='text-2xl uppercase'>Plant Hangers</h2>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: planthangers_id },
						}}
					>
						<a className='block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View Plant Hangers
						</a>
					</Link>
				</div>
			</div>

			<div className='bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<Image
						src='/accessories.jpg'
						alt='Accessories Picture'
						height={400}
						width={300}
					/>
				</div>
				<div className='p-4'>
					<h2 className='text-2xl uppercase'>Accessories</h2>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: accessories_id },
						}}
					>
						<a className='block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View Accessories
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Categories;
