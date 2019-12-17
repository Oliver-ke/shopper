import React from 'react';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CustomButton from '../custom-button/CustomButton';
import './cartDropDown.scss';

const CartDropDown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

// const mapStateToProps = (state) => ({
// 	cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropDown);
