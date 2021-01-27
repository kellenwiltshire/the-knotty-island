import React from 'react';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';

function products({ data, image }) {
	const title = data.results[0].title;
	const description = data.results[0].description;
	const price = data.results[0].price;
	const materials = [data.results[0].materials];
	const item_weight = data.results[0].item_weight;
	const item_width = data.results[0].item_width;
	const item_length = data.results[0].item_length;
	const url = data.results[0].url;

	return (
		<Layout>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4'>
						{image.results.map((image, i) => {
							return (
								<Image
									src={image.results[i].url_fullxfull}
									alt=''
									height={100}
									width={100}
								/>
							);
						})}
						<div className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4'></div>
					</div>
					<div className='md:flex-1 px-4'>
						<h2 className='mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl'>
							{title}
						</h2>

						<div className='flex items-center space-x-4 my-4'>
							<div>
								<div className='rounded-lg bg-gray-100 flex py-2 px-3'>
									<span className='text-indigo-400 mr-1 mt-1'>$</span>
									<span className='font-bold text-indigo-600 text-3xl'>
										{price}
									</span>
								</div>
							</div>
						</div>

						<p className='text-gray-500'>{description}</p>

						<p className='text-gray-500'>Materials: {materials}</p>

						<p className='text-gray-500'>Height: {item_width}</p>

						<p className='text-gray-500'>Length: {item_length}</p>

						<p className='text-gray-500'>Weight: {item_weight}</p>

						<div className='flex py-4 space-x-4'>
							<div className='relative'>
								<div className='text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold'>
									Qty
								</div>
								<select className='cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1'>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>

								<svg
									className='w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M8 9l4-4 4 4m0 6l-4 4-4-4'
									/>
								</svg>
							</div>

							<button
								type='button'
								className='h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white'
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default products;

//! This will fetch more detailed information regarding the product for the product page
export async function getServerSideProps({ query }) {
	const etsyAPI = 'jf8evf2p7kh6ihl16tew41k4';
	const id = query.id;
	try {
		const res = await fetch(
			`https://openapi.etsy.com/v2/listings/${id}?api_key=${etsyAPI}`,
		);
		const data = await res.json();
		let listing = data.results[i].listing_id;
		let resimage = await fetch(
			`https://openapi.etsy.com/v2/listings/${id}/images?api_key=jf8evf2p7kh6ihl16tew41k4`,
		);
		let image = await resimage.json();
		return {
			props: { data, image },
		};
	} catch (error) {}
}
