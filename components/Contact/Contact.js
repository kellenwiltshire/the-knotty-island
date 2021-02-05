import React from 'react';
// import { userID, templateID, serviceID } from '../../emailAPI/emailAPI';
import emailjs from 'emailjs-com';

const contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.init(userID);

		if (e.input !== '') {
			emailjs.sendForm(serviceID, templateID, '#contact').then(
				(response) => {
					console.log(response.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		}
		showSubmitSuccess();
	}

	const showSubmitSuccess = () => {
		document.getElementById('success').style.visibility = 'visible';
	};
	return (
		<div
			id='component'
			className='flex flex-col justify-center w-full items-center m-auto'
		>
			<h1 className='text-4xl sm:text-6xl text-center sm:m-5 font-title'>
				Contact Me
			</h1>
			<div className='shadow xl:w-full w-11/12'>
				<div className='md:grid md:grid-cols-1 md:gap-6'>
					<div className='md:col-span-2'>
						<form id='contact' onSubmit={sendEmail}>
							<div className='shadow overflow-hidden sm:rounded-md font-body'>
								<div className='px-4 py-5 bg-white sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='first_name'
												className='block text-sm font-medium text-black'
											>
												First name
											</label>
											<input
												type='text'
												name='first_name'
												id='first_name'
												autoComplete='given-name'
												className='mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='last_name'
												className='block text-sm font-medium text-black'
											>
												Last name
											</label>
											<input
												type='text'
												name='last_name'
												id='last_name'
												autoComplete='family-name'
												className='mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-5'>
											<label
												htmlFor='email_address'
												className='block text-sm font-medium text-black'
											>
												Email address
											</label>
											<input
												type='text'
												name='email_address'
												id='email_address'
												autoComplete='email'
												className='mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>
										<div className='col-span-6'>
											<label
												htmlFor='about'
												className='block text-sm font-medium text-black'
											>
												Brief Description About Your Request
											</label>
											<div className='mt-1'>
												<textarea
													id='description'
													name='description'
													rows='3'
													className='shadow-sm focus:ring-gray-300 focus:border-gray-300 mt-1 block w-full sm:text-sm border-gray-500 rounded-md'
													placeholder='Description'
													required
												></textarea>
											</div>
										</div>
									</div>
								</div>
								<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center py-2 px-4 border border-transparent text-black shadow-sm text-sm font-medium rounded-md bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Submit
									</button>
								</div>
								<div
									id='success'
									style={{ visibility: 'hidden' }}
									className='text-center justify-center align-middle'
								>
									<h1>Request Sent!</h1>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default contact;
