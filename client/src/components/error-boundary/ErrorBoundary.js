import React, { Component } from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './errorBoundaryStyles';

class ErrorBoundary extends Component {
	state = {
		hasErrored: false,
	};
	static getDerivedStateFromError(error) {
		// process the error
		// this.setState({ hasErrored: true });
		return { hasErrored: true };
	}

	componentDidCatch(error, infor) {
		console.log(error);
	}
	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
					<ErrorImageText>Something Went Wrong</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
