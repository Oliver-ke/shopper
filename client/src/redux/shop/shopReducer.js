import { FETCH_COLLECTION_FAILURE, FETCH_COLLECTION_START, FETCH_COLLECTION_SUCCESS } from './shopTypes';
const intialState = {
	collections: null,
	isFetching: false,
	errorMessage: undefined,
};

export default (state = intialState, action) => {
	switch (action.type) {
		case FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				collections: action.payload,
				isFetching: false,
			};
		case FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};
