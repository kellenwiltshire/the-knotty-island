import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

function products({ data, image, category, name }) {
	const title = data.results[0].title;
	const description = data.results[0].description;
	const price = data.results[0].price;
	const item_width = data.results[0].item_width;
	const item_length = data.results[0].item_length;
	const url = data.results[0].url;

	return (
		<Layout title={`The Knotty Island || ${title}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 font-body'>
				<div className='mb-10'>
					<Link
						href={{
							pathname: '/categories/[cat]',
							query: { cat: category, name: name },
						}}
					>
						<a>Back</a>
					</Link>
				</div>
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
							<p className='leading-relaxed'>{description}</p>
						</div>

						<div>
							<span className='text-gray-500 text-xl font-bold'>Length: </span>
							<p className='text-gray-500'>{item_length}mm</p>
						</div>

						<div>
							<span className='text-gray-500 text-xl font-bold'>Width: </span>
							<p className='text-gray-500'>{item_width}mm</p>
						</div>

						<div className='flex py-4 space-x-4'>
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

export async function getServerSideProps({ query }) {
	const id = query.id;
	const category = query.cat;
	try {
		const res = await fetch(
			`https://aqueous-depths-70835.herokuapp.com/listinginfo/${id}`,
		);
		const data = await res.json();
		let resimage = await fetch(
			`https://aqueous-depths-70835.herokuapp.com/listingpictures/${id}`,
		);
		let image = await resimage.json();
		return {
			props: { data, image, category },
		};
	} catch (error) {
		console.log(error);
	}
}
