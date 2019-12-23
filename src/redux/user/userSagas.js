import { takeLatest, all, call, put } from 'redux-saga/effects';
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase.util';

import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from './userTypes';
import { signInSuccess, signInFailure } from './userAction';

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapShot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
	} catch (error) {
		console.log(error);
		yield put(signInFailure(error.message));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapShot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
	yield all([ call(onGoogleSignInStart), call(onEmailSignInStart) ]);
}
