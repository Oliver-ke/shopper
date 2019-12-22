import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;

// export const withSpiner = (Component) => {
// 	const InnerComponent = ({ name, ...others }) => {
// 		return (
// 			<div className="h">
// 				<h1>{name}</h1>
// 				<Component {...others} />
// 			</div>
// 		);
// 	};
// 	return InnerComponent;
// };
