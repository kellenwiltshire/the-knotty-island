import React from 'react';
import { useSelector } from 'react-redux';

function Reviews() {
	const reviews = useSelector((state) => state.requestReviews.reviews.results);
	return (
		<div className='w-full flex align-middle justify-center flex-row flex-wrap items-center text-center pt-10'>
			<h1 className='w-full self-center'>Reviews</h1>
			{reviews ? (
				reviews.map((review, i) => {
					return (
						<div className='rounded shadow-xl m-2 max-w-md p-4 text-center border bg-gray-300'>
							{reviews[i].message}
						</div>
					);
				})
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Reviews;
