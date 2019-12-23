import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSageMiddleware();

// replaced thunks with sagas to handle side effects such as
// asynchronous api calls
// impure functions calls - like reading browser cache

const middleWares = process.env.NODE_ENV === 'development' ? [ logger, sagaMiddleware ] : [ sagaMiddleware ];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default { persistor, store };
