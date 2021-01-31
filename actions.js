import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
	REQUEST_STATUS_PENDING,
	REQUEST_STATUS_SUCCESS,
	REQUEST_STATUS_FAILURE,
} from './constants';

export const requestStore = () => async (dispatch) => {
	dispatch({ type: REQUEST_STORE_PENDING });

	fetch('http://LOCALHOST:3000/store')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_STORE_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_STORE_FAILURE, payload: error }),
		);
};

export const requestStatus = () => async (dispatch) => {
	dispatch({ type: REQUEST_STATUS_PENDING });

	fetch('http://LOCALHOST:3000/status')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_STATUS_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_STATUS_FAILURE, payload: error }),
		);
};
