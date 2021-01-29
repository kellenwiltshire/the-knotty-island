import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
	REQUEST_PICTURE_PENDING,
	REQUEST_PICTURE_SUCCESS,
	REQUEST_PICTURE_FAILURE,
} from './constants';
import { combineReducers } from 'redux';

const intialStateListings = {
	listings: {},
	isPending: false,
	error: '',
};

const requestStoreListings = (state = intialStateListings, action = {}) => {
	switch (action.type) {
		case REQUEST_STORE_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_STORE_SUCCESS:
			return Object.assign({}, state, {
				listings: action.payload,
				isPending: false,
			});
		case REQUEST_STORE_FAILURE:
			return Object.assign({}, state, {
				error: action.payload,
				isPending: false,
			});
		default:
			return state;
	}
};

const intialStatePictures = {
	pictures: {},
	isPending: false,
	error: '',
};

const requestProductPictures = (state = initialStatePictures, action = {}) => {
	switch (action.type) {
		case REQUEST_PICTURE_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_PICTURE_SUCCESS:
			return Object.assign({}, state, {
				pictures: action.payload,
				isPending: false,
			});
		case REQUEST_STORE_FAILURE:
			return Object.assign({}, state, {
				error: action.payload,
				isPending: false,
			});
		default:
			return state;
	}
};
const reducers = {
	requestStoreListings: requestStoreListings,
	requestProductPictures: requestProductPictures,
};
export default combineReducers(reducers);
