import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { clearCart, hydrateCartItemsOnLogin } from './cartAction';
import { selectCartItems } from './cartSelectors';
import { selectCurrentUser } from '../user/userSelector';
import { updateUserCartDocument, getUserCartItems } from '../../firebase/firebase.util';
import { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } from '../user/userTypes';
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } from './cartTypes';

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* getUserCart({ payload: { id } }) {
	const cartItems = yield getUserCartItems(id);
	const existingItem = yield select(selectCartItems);
	if (cartItems && cartItems.items.length > 0) {
		return yield put(hydrateCartItemsOnLogin(cartItems.items));
	}
	yield updateUserCartDocument(id, existingItem);
	yield put(hydrateCartItemsOnLogin(existingItem));
}

export function* updateItemToFirebase() {
	const currentUser = yield select(selectCurrentUser);
	if (currentUser) {
		try {
			const items = yield select(selectCartItems);
			yield updateUserCartDocument(currentUser.id, items);
		} catch (err) {
			console.log(err);
		}
	}
}

export function* onAddItem() {
	yield takeLatest([ ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART ], updateItemToFirebase);
}

export function* onSignOutSuccess() {
	yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
	yield takeLatest(SIGN_IN_SUCCESS, getUserCart);
}

export function* cartSagas() {
	yield all([ call(onSignOutSuccess), call(onSignInSuccess), call(onAddItem) ]);
}

// users cart sold be save an loaded once signed in
