import React from 'react';
import { useSelector } from 'react-redux';

function Reviews() {
	const reviews = useSelector((state) => state.requestReviews.reviews.results);
	return (
		<div className='w-full flex align-middle justify-center flex-row flex-wrap items-center text-center pt-10 mb-10'>
			<h1 className='text-4xl sm:text-6xl w-full self-center font-title m-10'>
				Customer Reviews
			</h1>
			{reviews ? (
				reviews.map((review, i) => {
					let message = reviews[i].message;
					let fixedMessage = message.replace('I&#39;m', "I'm");
					fixedMessage = fixedMessage.replace('t&#39;s', "t's");
					if (fixedMessage.length > 100) {
						return (
							<div
								key={i}
								className='text-xs sm:text-base leading-relaxed rounded m-2 max-w-lg p-4 text-center border bg-gray-200 font-body'
							>
								{fixedMessage}
							</div>
						);
					} else {
						return <div></div>;
					}
				})
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Reviews;
