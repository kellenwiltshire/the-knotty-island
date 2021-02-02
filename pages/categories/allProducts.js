import React from 'react';
import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';
import Image from 'next/image';

export default function allProducts() {
	return (
		<Layout title='The Knotty Island || Products'>
			<div className='w-screen bg-gray-300'>
				<div className='flex justify-center'>
					<Image
						src='/logo_med.png'
						alt='Logo'
						height={300}
						width={300}
						objectFit='contain'
					/>
				</div>
			</div>
			<div className='container'>
				<div className='flex flex-row flex-wrap justify-center'>
					<Categories />
				</div>
			</div>
		</Layout>
	);
}
