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
						<div className='m-10'>
							<h1 className='self-center text-8xl text-center font-title mb-2'>
								The Knotty Island
							</h1>
							<h2 className='self-center text-2xl text-center font-body'>
								Handmade Macrame Decor
							</h2>
						</div>
						<Vacation vacationMessage={vacationMessage} />
						<About />
						<Contact />
						<div className='flex flex-row flex-wrap font-body justify-center m-5'>
							<h1 className='w-full font-title text-center text-4xl sm:text-6xl mb-5'>
								Shop In Store
							</h1>
							<div className='mx-5'>
								<a href='https://www.we-made-it.ca/' target='_blank'>
									<p className='text-xl font-bold'>We Made It</p>
								</a>
								<p>101 King St</p>
								<p>Newcastle, Ontario</p>
							</div>
							<div className='mx-5'>
								<a href='https://artisanmadeco.com/' target='_blank'>
									<p className='text-xl font-bold'>Artisan Made Co.</p>
								</a>
								<p>1724 Bath Road</p>
								<p>Unit 10</p>
								<p>Kingston, Ontario</p>
							</div>
						</div>
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
						<div className='m-10'>
							<h1 className='self-center text-5xl sm:text-8xl text-center font-title mb-2'>
								The Knotty Island
							</h1>
							<h2 className='self-center text-xl sm:text-2xl text-center font-body'>
								Handmade Macrame Decor
							</h2>
						</div>
						<Categories />
						<div className='flex flex-row flex-wrap font-body justify-center m-5'>
							<h1 className='w-full font-title text-center text-4xl sm:text-6xl mb-5'>
								Shop In Store
							</h1>
							<div className='mx-5'>
								<p className='text-xl font-bold'>We Made It</p>
								<p>101 King St</p>
								<p>Newcastle, Ontario</p>
							</div>
							<div className='mx-5'>
								<a href='https://artisanmadeco.com/' target='_blank'>
									<p className='text-xl font-bold'>Artisan Made Co.</p>
								</a>
								<p>1724 Bath Road</p>
								<p>Unit 10</p>
								<p>Kingston, Ontario</p>
							</div>
						</div>
						<Reviews />
					</div>
				</div>
			</Layout>
		);
	}
}
