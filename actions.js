import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
} from './constants';

export const requestStore = () => (dispatch) => {
	dispatch({ type: REQUEST_STORE_PENDING });
	fetch(
		'https://openapi.etsy.com/v2/shops/TheKnottyIsland/listings/active?api_key=jf8evf2p7kh6ihl16tew41k4',
	)
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUEST_STORE_SUCCESS, payload: data }))
		.catch((err) => dispatch({ type: REQUEST_STORE_FAILURE, payload: err }));
};

//!THIS WILL EVENTUALLY GET FILLED OUT TO ADD ITEMS TO A CART/FILTER RESULTS/ETC

//export const addToCart = (text) = > ({
//     type: 'ADD_TO_CART',
//     payload: 'text'
// })
