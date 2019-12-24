import React from 'react';
import { SpinnerOverlay } from './withSpinnerStyles';
import Spinner from '../Spinner/Spinner';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<Spinner />
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
