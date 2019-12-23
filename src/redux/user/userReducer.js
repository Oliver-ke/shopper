import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './userTypes';

const initialState = {
	currentUser: null,
	error: null,
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;

// case GOOGLE_SIGN_IN_SUCCESS:
// case EMAIL_SIGN_IN_SUCCESS:
// 		return {
// 			...state,
// 			currentUser: action.payload,
// 			error: null,
// 		};
