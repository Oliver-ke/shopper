import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//selecting localstorage
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cart' ], // what we want to persist
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

// this is the root reducer to manage any other reducer
