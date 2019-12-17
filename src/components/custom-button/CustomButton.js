import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => {
	return (
		<button {...rest} className={`${isGoogleSignIn && 'google-sign-in'} ${inverted && 'inverted'} custom-button`}>
			{children}
		</button>
	);
};

export default CustomButton;
