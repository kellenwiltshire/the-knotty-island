import Head from 'next/Head';
import Layout from '../components/Layout/Layout';
import Splash from '../components/Splash/Splash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStore } from '../actions';
import Categories from '../components/Categories/Categories';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestStore());
	}, [dispatch]);

	let listings = {};

	const state = useSelector((state) => state);
	if (!state.requestStoreListings.isError) {
		listings = state.requestStoreListings.listings.results;
	}

	return (
		<Layout title='The Knotty Island'>
			<Splash />
			<div className='container'>
				<div className='flex flex-row flex-wrap'>
					<Categories />
				</div>
			</div>
		</Layout>
	);
}
