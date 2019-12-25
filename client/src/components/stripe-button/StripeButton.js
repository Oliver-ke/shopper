import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import companyLogo from '../../assets/crown.svg';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_COifSBt5OJSJ69H2AFuraYq800CwgCkjSm';
	const onToken = async (token) => {
		console.log(token);
		try {
			await axios.post('/payment', { amount: priceForStripe, token });
			alert('Payment was Successful');
		} catch (error) {
			console.log(error);
			alert('Error making payment, please ensure you use the test credit card');
		}
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
