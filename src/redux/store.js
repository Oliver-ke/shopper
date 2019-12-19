import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middleWares = process.env.NODE_ENV === 'development' ? [ logger ] : [];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);
export default { persistor, store };
