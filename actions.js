import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
	REQUEST_STATUS_PENDING,
	REQUEST_STATUS_SUCCESS,
	REQUEST_STATUS_FAILURE,
	REQUEST_REVIEWS_FAILURE,
	REQUEST_REVIEWS_PENDING,
	REQUEST_REVIEWS_SUCCESS,
	REQUEST_ABOUT_PENDING,
	REQUEST_ABOUT_SUCCESS,
	REQUEST_ABOUT_FAILURE,
} from './constants';

export const requestStore = () => async (dispatch) => {
	dispatch({ type: REQUEST_STORE_PENDING });

	fetch('https://aqueous-depths-70835.herokuapp.com/store')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_STORE_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_STORE_FAILURE, payload: error }),
		);
};

export const requestStatus = () => async (dispatch) => {
	dispatch({ type: REQUEST_STATUS_PENDING });

	fetch('https://aqueous-depths-70835.herokuapp.com/status')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_STATUS_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_STATUS_FAILURE, payload: error }),
		);
};

export const requestReviews = () => async (dispatch) => {
	dispatch({ type: REQUEST_REVIEWS_PENDING });

	fetch('https://aqueous-depths-70835.herokuapp.com/reviews')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_REVIEWS_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_REVIEWS_FAILURE, payload: error }),
		);
};

export const requestAbout = () => async (dispatch) => {
	dispatch({ type: REQUEST_ABOUT_PENDING });

	fetch('https://aqueous-depths-70835.herokuapp.com/aboutMe')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_ABOUT_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_ABOUT_FAILURE, payload: error }),
		);
};
