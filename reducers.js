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
	REQUEST_LISTING_PENDING,
	REQUEST_LISTING_SUCCESS,
	REQUEST_LISTING_FAILURE,
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

const initialReviewsState = {
	reviews: {},
	isError: false,
	isPending: false,
	error: '',
};

const requestReviews = (state = initialReviewsState, action = {}) => {
	switch (action.type) {
		case REQUEST_REVIEWS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_REVIEWS_SUCCESS:
			return Object.assign({}, state, {
				reviews: action.payload,
				isPending: false,
			});
		case REQUEST_REVIEWS_FAILURE:
			return Object.assign({}, state, {
				error: action.payload,
				isError: true,
				isPending: false,
			});
		default:
			return state;
	}
};

const initialAboutState = {
	about: {},
	isError: false,
	isPending: false,
	error: '',
};

const requestAbout = (state = initialAboutState, action = {}) => {
	switch (action.type) {
		case REQUEST_ABOUT_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_ABOUT_SUCCESS:
			return Object.assign({}, state, {
				about: action.payload,
				isPending: false,
			});
		case REQUEST_ABOUT_FAILURE:
			return Object.assign({}, state, {
				error: action.payload,
				isError: true,
				isPending: false,
			});
		default:
			return state;
	}
};

const initialListingImageState = {
	image: '',
	isError: false,
	isPending: false,
	error: '',
};

const requestListingImage = (state = initialListingImageState, action = {}) => {
	switch (action.type) {
		case REQUEST_LISTING_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_LISTING_SUCCESS:
			return Object.assign({}, state, {
				image: action.payload,
				isPending: false,
			});
		case REQUEST_LISTING_FAILURE:
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
	requestReviews: requestReviews,
	requestAbout: requestAbout,
	requestListingImage: requestListingImage,
};
export default combineReducers(reducers);
