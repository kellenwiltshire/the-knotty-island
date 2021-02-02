import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function ProductCards({ description, title, price, listing }) {
	const shortTitle = title.split('/', 1);
	let fixedDescription = description.replace('&#39;', "'");
	fixedDescription = fixedDescription.replace('t&#39;s', "t's");
	fixedDescription = fixedDescription.replace('&quot;', '"');

	const [image, setImage] = useState(null);

	useEffect(() => {
		fetch(`http://LOCALHOST:3000/listing/${listing}`)
			.then((res) => res.json())
			.then((data) => setImage(data.results[0].url_fullxfull));
	});
	return (
		<div className='m-1 sm:m-5'>
			<div className='bg-white w-28 sm:w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
				<div
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
					}}
				>
					<img src={image} alt='' className='rounded-t' />
				</div>
				<div className='p-4'>
					<h2 className='text-xs sm:text-2xl uppercase'>{shortTitle}</h2>
					<p className='font-light text-gray-500 sm:text-lg my-2'>${price}</p>
					<p className='hidden sm:block'>{fixedDescription}</p>
					<Link
						href={{
							pathname: '/products/[id]',
							query: { id: listing },
						}}
					>
						<a className='text-xs sm:text block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light sm:mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
							View
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductCards;
