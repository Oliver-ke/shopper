import {
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
	SIGN_UP_FAILURE,
	EMAIL_SIGN_IN_START,
	GOOGLE_SIGN_IN_START,
	SIGN_UP_START,
} from './userTypes';

const initialState = {
	currentUser: null,
	error: null,
	isSignUpLoading: false,
	isSignInLoading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case EMAIL_SIGN_IN_START:
		case GOOGLE_SIGN_IN_START:
			return {
				...state,
				isSignInLoading: true,
			};
		case SIGN_UP_START:
			return {
				...state,
				isSignUpLoading: true,
			};
		case SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				isSignInLoading: false,
				isSignUpLoading: false,
				error: null,
			};
		case SIGN_OUT_SUCCESS:
			return {
				...state,
				isSignInLoading: false,
				isSignUpLoading: false,
				currentUser: null,
				error: null,
			};
		case SIGN_IN_FAILURE:
		case SIGN_OUT_FAILURE:
		case SIGN_UP_FAILURE:
			return {
				...state,
				isSignInLoading: false,
				isSignUpLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
