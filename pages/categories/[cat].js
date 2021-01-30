import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { requestStore } from '../../actions';
import ProductCards from '../../components/ProductCards/ProductCards';

function categories({ category }) {
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

	return (
		<Layout>
			{filterListings.length ? (
				filterListings.map((list, i) => {
					return (
						<ProductCards
							key={i}
							description={filterListings[i].description}
							title={filterListings[i].title}
							price={filterListings[i].price}
							listing={filterListings[i].listing_id}
						/>
					);
				})
			) : (
				<div></div>
			)}
		</Layout>
	);
}

export default categories;

export async function getServerSideProps({ query }) {
	const category = query.cat;
	return { props: { category } };
}