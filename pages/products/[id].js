import React from 'react';
import Layout from '../../components/Layout/Layout';

function products({ data, image }) {
	const title = data.results[0].title;
	const description = data.results[0].description;
	const price = data.results[0].price;
	const materials = [data.results[0].materials];
	const item_weight = data.results[0].item_weight;
	const item_width = data.results[0].item_width;
	const item_length = data.results[0].item_length;
	const url = data.results[0].url;
	console.log(image);

	return (
		<Layout>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4 order-2 sm:order-1'>
						{image.results.map((link, i) => {
							return (
								<img
									key={i}
									className='rounded-lg mb-4'
									src={image.results[i].url_fullxfull}
									width='400px'
									height='auto'
								/>
							);
						})}
					</div>
					<div className='md:flex-1 px-4 order-1 sm:order-2'>
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

						<div className='text-gray-500'>
							<span className='text-xl font-bold'>Description: </span>{' '}
							<p>{description}</p>
						</div>

						<div>
							<span className='text-gray-500 text-xl font-bold'>
								Materials:{' '}
							</span>
							<ul className='text-gray-500'>
								{materials.map((mat, i) => {
									return <li key={i}>{materials[i] + ' '}</li>;
								})}
							</ul>
						</div>

						<div>
							<span className='text-gray-500 text-xl font-bold'>Length: </span>
							<p className='text-gray-500'>{item_length}mm</p>
						</div>

						<div>
							<span className='text-gray-500 text-xl font-bold'>Width: </span>
							<p className='text-gray-500'>{item_width}mm</p>
						</div>
						<div>
							<span className='text-gray-500 text-xl font-bold'>Weight: </span>
							<p className='text-gray-500'>{item_weight}grams</p>
						</div>

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
							</div>

							<a
								href={url}
								target='_blank'
								className='block bg-gray-300 py-3 px-4 text-gray-600 text-center rounded shadow-lg uppercase font-light hover:bg-gray-400 hover:text-white duration-300 ease-in-out'
							>
								View on Etsy
							</a>
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
		let resimage = await fetch(
			`https://openapi.etsy.com/v2/listings/${id}/images?api_key=${etsyAPI}`,
		);
		let image = await resimage.json();
		return {
			props: { data, image },
		};
	} catch (error) {
		console.log(error);
	}
}
