import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cartTypes';
import { addItemToCart, removeItemFromCart } from './cartUtil';
const initialState = {
	hidden: true,
	cartItems: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
			};
		case REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};
