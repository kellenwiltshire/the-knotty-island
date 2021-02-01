import React from 'react';
import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';
import Image from 'next/image';

export default function allProducts() {
	return (
		<Layout title='The Knotty Island || Products'>
			<div className='bg-auto bg-center bg-no-repeat w-screen justify-items-center bg-gray-300 mb-3 self-center'>
				<Image
					src='/logo_med.png'
					alt='Logo'
					height={300}
					width={300}
					className='self-center'
				/>
			</div>
			<div className='container'>
				<div className='flex flex-row flex-wrap justify-center'>
					<Categories />
				</div>
			</div>
		</Layout>
	);
}
