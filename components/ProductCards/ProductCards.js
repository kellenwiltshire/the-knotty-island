import React from 'react';
import Link from 'next/link';

function ProductCards({ description, title, price, listing }) {
	// let imageURL = '';
	// for (let i = 0; i < image.length; i++) {
	// 	if (image[i].image.params.listing_id === listString) {
	// 		imageURL = image[i].image.results.url_fullxfull;
	// 	}
	// }
	return (
		<div className='m-5'>
			<div className='bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					{/* <img src={imageURL} alt='' className='rounded-t' /> */}
				</div>
				<div className='p-4'>
					<h2 className='text-2xl uppercase'>{title}</h2>
					<p className='font-light text-gray-500 text-lg my-2'>${price}</p>
					<p>{description}</p>
					<Link
						href={{
							pathname: '/products/[id]',
							query: { id: listing },
						}}
					>
						<a className='block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductCards;
