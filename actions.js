import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
	REQUEST_PICTURE_PENDING,
	REQUEST_PICTURE_SUCCESS,
	REQUEST_PICTURE_FAILURE,
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

export const requestPictures = () => async (dispatch) => {
	dispatch({ type: REQUEST_PICTURE_PENDING });

	fetch('http://LOCALHOST:3000/pictures')
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_PICTURE_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: REQUEST_PICTURE_FAILURE, payload: error }),
		);
};
