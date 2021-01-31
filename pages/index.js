import Splash from '../components/Splash/Splash';
import Categories from '../components/Categories/Categories';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus } from '../actions';
import Vacation from '../components/Vacation/Vacation';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestStatus());
	}, [dispatch]);

	const state = useSelector((state) => state);
	console.log(state);

	let vacation = false;
	let vacationMessage = '';

	if (!state.requestStoreStatus.isError) {
		if (state.requestStoreStatus.shopStatus.results[0].is_vacation) {
			vacation = true;
			vacationMessage =
				state.requestStoreStatus.shopStatus.results[0].vacation_message;
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
					<div className='flex flex-row flex-wrap'>
						<Categories />
					</div>
				</div>
			</Layout>
		);
	}
}
