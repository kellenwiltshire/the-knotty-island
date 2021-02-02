import React from 'react';
import Head from 'next/Head';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function Layout({ title, children, vacation }) {
	const vacationStatus = vacation;
	return (
		<div className='flex flex-col'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation vacationStatus={vacationStatus} />
			<main className='mx-auto pt-16 sm:min-h-screen flex justify-center flex-row flex-wrap'>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
