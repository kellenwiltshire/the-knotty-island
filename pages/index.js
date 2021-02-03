import Splash from '../components/Splash/Splash';
import Categories from '../components/Categories/Categories';
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { requestStore, requestStatus, requestReviews } from '../actions';
import Vacation from '../components/Vacation/Vacation';
import Reviews from '../components/Reviews/Reviews';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestStore());
		dispatch(requestStatus());
		dispatch(requestReviews());
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
			<Layout title='The Knotty Island || Handmade Macrame Decor'>
				<Splash />
				<div className='container'>
					<div className='flex flex-row flex-wrap justify-center'>
						<div>
							<h1 className='self-center text-4xl text-center'>
								The Knotty Island
							</h1>
							<h2 className='self-center text-2xl text-center'>
								Handmade Macrame Decor
							</h2>
						</div>
						<Vacation vacationMessage={vacationMessage} />
						<About />
						<Contact />
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
						<div>
							<h1 className='self-center text-4xl text-center'>
								The Knotty Island
							</h1>
							<h2 className='self-center text-2xl text-center'>
								Handmade Macrame Decor
							</h2>
						</div>
						<Categories />
						<Reviews />
					</div>
				</div>
			</Layout>
		);
	}
}
