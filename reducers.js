import {
	REQUEST_STORE_PENDING,
	REQUEST_STORE_SUCCESS,
	REQUEST_STORE_FAILURE,
	REQUEST_STATUS_PENDING,
	REQUEST_STATUS_SUCCESS,
	REQUEST_STATUS_FAILURE,
} from './constants';
import { combineReducers } from 'redux';

const intialStateListings = {
	listings: {},
	isPending: false,
	isError: false,
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
				isError: true,
				isPending: false,
			});
		default:
			return state;
	}
};

const inititalStoreStatus = {
	shopStatus: {},
	isError: false,
	isPending: false,
	error: '',
};

const requestStoreStatus = (state = inititalStoreStatus, action = {}) => {
	switch (action.type) {
		case REQUEST_STATUS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_STATUS_SUCCESS:
			return Object.assign({}, state, {
				shopStatus: action.payload,
				isPending: false,
			});
		case REQUEST_STATUS_FAILURE:
			return Object.assign({}, state, {
				error: action.payload,
				isError: true,
				isPending: false,
			});
		default:
			return state;
	}
};

const reducers = {
	requestStoreListings: requestStoreListings,
	requestStoreStatus: requestStoreStatus,
};
export default combineReducers(reducers);
