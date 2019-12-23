import { takeLatest, all, call, put } from 'redux-saga/effects';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.util';

import {
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	CHECK_USER_SESSION,
	SIGN_OUT_START,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
} from './userTypes';
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpFailure,
	signUpSuccess,
} from './userAction';

export function* getSnapshotFromUserAuth(userAuth, additonalData = null) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, additonalData);

		const userSnapShot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
	} catch (error) {
		console.log(error);
		yield put(signInFailure(error.message));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		console.log(error);
		yield put(signInFailure(error.message));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* signOutUser() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error.message));
	}
}

// listens and fires when signUp is successful action

export function* signUpSignIn({ payload: { user, displayName } }) {
	yield getSnapshotFromUserAuth(user, displayName);
}

export function* signUpUser({ payload }) {
	try {
		const { email, password, displayName } = payload;
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, displayName }));
	} catch (error) {
		yield put(signUpFailure(error.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(SIGN_OUT_START, signOutUser);
}

export function* onUserSignUp() {
	yield takeLatest(SIGN_UP_START, signUpUser);
}

export function* onSignUpSuccess() {
	yield takeLatest(SIGN_UP_SUCCESS, signUpSignIn);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onUserSignUp),
		call(onSignUpSuccess),
	]);
}
