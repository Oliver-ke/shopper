import { all, call } from 'redux-saga/effects';

// individual saga
import { fetchCollectionStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
// run individual saga concurrently using all effect

export default function* rootSaga() {
	yield all([ call(fetchCollectionStart), call(userSagas) ]);
}
