import Splash from '../components/Splash/Splash';
import Categories from '../components/Categories/Categories';
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {
	requestStore,
	requestStatus,
	requestReviews,
	requestAbout,
} from '../actions';
import Vacation from '../components/Vacation/Vacation';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestStore());
		dispatch(requestStatus());
		dispatch(requestReviews());
		dispatch(requestAbout());
	}, [dispatch]);

	const state = useSelector((state) => state);

	const shopStatus = state.requestStoreStatus.shopStatus;

	let vacationStatus = false;
	let vacationMessage = '';

	if (!shopStatus.isError) {
		if (shopStatus.results) {
			if (shopStatus.results[0].is_vacation) {
				vacationStatus = true;
				vacationMessage = shopStatus.results[0].vacation_message;
			}
		}
	}

	if (vacationStatus) {
		return (
			<Layout title='The Knotty Island' vacationStatus={vacationStatus}>
				<Splash />
				<div className='container'>
					<div className='flex flex-row flex-wrap justify-center'>
						<h1 className='self-center text-4xl mb-10'>The Knotty Island</h1>
						<Vacation vacationMessage={vacationMessage} />
						<Reviews />
					</div>
				</div>
			</Layout>
		);
	} else {
		return (
			<Layout title='The Knotty Island'>
				<Splash />
				<div className='container'>
					<div className='flex flex-row flex-wrap justify-center'>
						<h1 className='self-center text-4xl'>The Knotty Island</h1>
						<Categories />
					</div>
				</div>
			</Layout>
		);
	}
}
