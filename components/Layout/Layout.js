import React from 'react';
import Head from 'next/Head';
import Navigation from '../Navigation/Navigation';

function Layout({ title, children }) {
	return (
		<div className='flex flex-col'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<main className='container mx-auto pt-16 h-screen'>{children}</main>
			{/* <Footer /> */}
		</div>
	);
}

export default Layout;
