import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import companyLogo from '../../assets/crown.svg';
const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_COifSBt5OJSJ69H2AFuraYq800CwgCkjSm';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Success');
	};
	return (
		<StripeCheckout
			name="Shopper Swift Ltd."
			label="Pay Now"
			billingAddress
			shippingAddress
			image={companyLogo}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

// https://svgshare.com/i/CUz.svg
