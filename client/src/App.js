import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userAction';
import { createStructuredSelector } from 'reselect';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { GlobalStyle } from './globalStyles';

// switch is used to render only one component that matches a pattern
// it differ from a just Route because Route would render all matches
// if placed without exact

// using react lazy for code splittinf
const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const SignInSignUpPage = lazy(() => import('./pages/signIn-signUp/SignIn-SignUp'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({ currentUser, checkUserSession }) => {
	useEffect(
		() => {
			checkUserSession();
		},
		[ checkUserSession ],
	);
	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={Homepage} />
						<Route path="/shop" component={ShopPage} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const mapStateToProp = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProp, mapDispatchToProps)(App);
