import React from 'react';
import CartItem from '../cart-item/CartItem';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import CustomButton from '../custom-button/CustomButton';
import './cartDropDown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
	const handleCheckout = () => {
		dispatch(toggleCartHidden());
		return history.push('/checkout');
	};
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<span className="empty-message">No Item in cart</span>
				)}
			</div>
			<CustomButton onClick={handleCheckout}>Go To Checkout</CustomButton>
		</div>
	);
};

// const mapStateToProps = (state) => ({
// 	cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
export default connect(mapStateToProps)(withRouter(CartDropDown));

// or
// export default withRouter(connect(mapStateToProps)(CartDropDown));
// use goat tie rope, use rope tie goat, thay're all still the same thing
