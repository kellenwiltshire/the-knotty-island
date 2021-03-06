import React from 'react';

function Footer() {
	return (
		<footer className='bg-gray-300 w-full px-4 mx-auto'>
			<div className='flex flex-col items-center my-4'>
				<div>
					<div className='flex flex-row items-center space-x-8 justify-center'>
						{/* FACEBOOK */}
						<a href='https://www.facebook.com/theknottyisland'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-brand-facebook'
								width='24'
								height='24'
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
						{/* Instagram */}
						<a href='https://www.instagram.com/theknottyisland/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-brand-instagram'
								width='24'
								height='24'
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
						<a href='https://www.etsy.com/ca/shop/TheKnottyIsland'>
							<p className='text-blue-500'>Etsy</p>
						</a>
					</div>
					<div className='text-xs text-center text-gray-400 px-2 pt-6 font-body'>
						<p>
							The term 'Etsy' is a trademark of Etsy, Inc. This application uses
							the Etsy API but is not endorsed or certified by Etsy, Inc.
						</p>
						<p className='m-2'>
							<a href='https://www.kellenwiltshire.com' target='_blank'>
								Web Development by Kellen Wiltshire
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
