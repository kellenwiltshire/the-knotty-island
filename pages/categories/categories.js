import React from 'react';
import Layout from '../../components/Layout/Layout';
import Categories from '../../components/Categories/Categories';

export default function Categories() {
	return (
		<Layout title='The Knotty Island || Products'>
			<div className='container'>
				<div className='flex flex-row flex-wrap'>
					<Categories />
				</div>
			</div>
		</Layout>
	);
}
