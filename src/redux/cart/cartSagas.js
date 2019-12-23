import { all, call, put, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cartAction';
import { SIGN_OUT_SUCCESS } from '../user/userTypes';

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([ call(onSignOutSuccess) ]);
}
