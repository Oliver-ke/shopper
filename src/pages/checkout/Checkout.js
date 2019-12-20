import React from 'react';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total, Warning } from './checkoutStyle';

const Checkout = ({ cartItems, total }) => {
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)}
			<Total>TOTAL: ${total}</Total>
			<Warning>
				* Plese use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</Warning>
			<StripeCheckoutButton price={total} />
		</CheckoutContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});
export default connect(mapStateToProps)(Checkout);
