import React from 'react';

function Vacation({ vacationMessage }) {
	return (
		<div className='w-full flex justify-center flex-col items-center text-2xl text-center m-5 bg-gray-200 p-2 font-body'>
			{vacationMessage}
			<div className='flex flex-row items-center space-x-10'>
				{/* Facebook */}
				<a href='#'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-brand-facebook'
						width='50'
						height='50'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#2563eb'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
					</svg>
				</a>
				{/* Etsy */}
				<a href='https://www.etsy.com/ca/shop/TheKnottyIsland'>
					<p className='text-3xl text-blue-500'>Etsy</p>
				</a>
				{/* Instagram */}
				<a href='#'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-brand-instagram'
						width='50'
						height='50'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#2563eb'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<rect x='4' y='4' width='16' height='16' rx='4' />
						<circle cx='12' cy='12' r='3' />
						<line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
					</svg>
				</a>
			</div>
		</div>
	);
}

export default Vacation;
