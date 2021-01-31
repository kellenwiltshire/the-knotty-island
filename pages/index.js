import Splash from '../components/Splash/Splash';
import Categories from '../components/Categories/Categories';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus, requestReviews } from '../actions';
import Vacation from '../components/Vacation/Vacation';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestStatus());
		dispatch(requestReviews());
	}, [dispatch]);

	const state = useSelector((state) => state);

	let reviews = state.requestReviews.reviews.results;
	console.log(reviews);

	let vacation = false;
	let vacationMessage = '';

	if (!state.requestStoreStatus.isError) {
		if (state.requestStoreStatus.shopStatus.results) {
			if (state.requestStoreStatus.shopStatus.results[0].is_vacation) {
				vacation = true;
				vacationMessage =
					state.requestStoreStatus.shopStatus.results[0].vacation_message;
			}
		}
	}

	if (vacation) {
		return (
			<Layout title='The Knotty Island' vacation={vacation}>
				<Splash />
				<div className='container'>
					<div className='flex flex-row flex-wrap'>
						<Vacation vacationMessage={vacationMessage} />
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
						<Reviews />
					</div>
				</div>
			</Layout>
		);
	}
}
