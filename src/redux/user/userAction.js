import { GOOGLE_SIGN_IN_START, SIGN_IN_SUCCESS, EMAIL_SIGN_IN_START, SIGN_IN_FAILURE } from './userTypes';

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
	type: SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = (error) => ({
	type: SIGN_IN_FAILURE,
	payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});
