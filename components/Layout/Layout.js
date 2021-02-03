import React from 'react';
import Head from 'next/Head';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Splash from '../Splash/Splash';

function Layout({ title, children, vacation }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<main className='mx-auto pt-16 sm:min-h-screen flex justify-center flex-row flex-wrap'>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
