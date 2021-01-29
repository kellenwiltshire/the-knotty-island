import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
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
const reducers = {
	requestStoreListings: requestStoreListings,
};
export default combineReducers(reducers);
