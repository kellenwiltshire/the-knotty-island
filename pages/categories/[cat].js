import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { requestStore } from '../../actions';
import ProductCards from '../../components/ProductCards/ProductCards';
import Contact from '../../components/Contact/Contact';

function categories({ category, name }) {
	const cat = category;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestStore());
	}, [dispatch]);

	let listings = {};
	let filterListings = {};

	const state = useSelector((state) => state);
	if (!state.requestStoreListings.isError) {
		listings = state.requestStoreListings.listings.results;
	}

	if (listings) {
		filterListings = listings.filter((list) => list.shop_section_id == cat);
	}

	if (filterListings.length === 0) {
		return (
			<Layout title='The Knotty Island || Handmade Macrame Decor'>
				<div className='flex flex-col justify-center space-y-10'>
					<h1 className='text-6xl font-title text-center w-full self-center mb-20'>
						{name}
					</h1>
					<p className='font-body mb-20 text-center'>
						I currently don't have any Wall Hangings for Sale. Please contact me
						if you would like a something made!
					</p>
					<div className='container self-center flex flex-col'>
						<Contact />
					</div>
				</div>
			</Layout>
		);
	} else {
		return (
			<Layout title='The Knotty Island || Handmade Macrame Decor'>
				<h1 className='text-6xl font-title text-center w-full self-center mb-5'>
					{name}
				</h1>
				<div className='flex flex-row flex-wrap justify-center'>
					{filterListings.length ? (
						filterListings.map((list, i) => {
							return (
								<ProductCards
									key={i}
									description={filterListings[i].description}
									title={filterListings[i].title}
									price={filterListings[i].price}
									listing={filterListings[i].listing_id}
									cat={cat}
									name={name}
								/>
							);
						})
					) : (
						<div></div>
					)}
				</div>
			</Layout>
		);
	}
}

export default categories;

export async function getServerSideProps({ query }) {
	const category = query.cat;
	const name = query.name;
	return { props: { category, name } };
}
