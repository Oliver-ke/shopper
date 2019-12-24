import { all, call } from 'redux-saga/effects';

// individual saga
import { shopSagas } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';
// run individual saga concurrently using all effect

export default function* rootSaga() {
	yield all([ call(shopSagas), call(userSagas), call(cartSagas) ]);
}
