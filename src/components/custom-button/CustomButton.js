import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...rest }) => {
	return (
		<button {...rest} className={`${isGoogleSignIn && 'google-sign-in'} custom-button`}>
			{children}
		</button>
	);
};

export default CustomButton;
