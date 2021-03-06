import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function Layout({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='The Knotty Island Handmade Macrame Rebecca Wiltshire Kingston Ontario Canada Etsy' />
				<meta lang='en' />

				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Seaweed+Script&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Navigation />
			<main className='mx-auto pt-16 min-h-screen flex justify-center flex-row flex-wrap'>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
