import React from 'react';
import { useSelector } from 'react-redux';

function Reviews() {
	const reviews = useSelector((state) => state.requestReviews.reviews.results);
	return (
		<div className='w-full flex align-middle justify-center flex-row flex-wrap items-center text-center pt-10'>
			<h1 className='w-full self-center'>Reviews</h1>
			{reviews ? (
				reviews.map((review, i) => {
					let message = reviews[i].message;
					let fixedMessage = message.replace('I&#39;m', "I'm");
					fixedMessage = fixedMessage.replace('t&#39;s', "t's");
					return (
						<div className='text-xs sm:text-base leading-relaxed rounded shadow-xl m-2 max-w-md p-4 text-center border bg-gray-300'>
							{fixedMessage}
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
