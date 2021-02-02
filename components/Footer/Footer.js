import React from 'react';

function Footer() {
	return (
		<footer className='bg-gray-300 w-full px-4 mx-auto'>
			<div className='flex flex-col items-center my-4'>
				<div>
					<div className='flex flex-row items-center justify-between'>
						{/* FACEBOOK */}
						<a href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-brand-facebook'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#2563eb'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
							</svg>
						</a>
						{/* Instagram */}
						<a href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-brand-instagram'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#2563eb'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<rect x='4' y='4' width='16' height='16' rx='4' />
								<circle cx='12' cy='12' r='3' />
								<line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
							</svg>
						</a>
						<a href='https://www.etsy.com/ca/shop/TheKnottyIsland'>
							<p className='text-blue-500'>Etsy</p>
						</a>
					</div>
					<p className='text-xs inline-flex text-gray-400 px-2 pt-6'>
						<a href='https://www.kellenwiltshire.com' target='_blank'>
							Web Development by Kellen Wiltshire
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
