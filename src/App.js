import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelector';
import { createStructuredSelector } from 'reselect';
import SignInSignUpPage from './pages/signIn-signUp/SignIn-SignUp';

import './App.css';

// switch is used to render only one component that matches a pattern
// it differ from a just Route because Route would render all matches
// if placed without exact

const App = ({ currentUser }) => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={Checkout} />
				<Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)} />
			</Switch>
		</div>
	);
};

const mapStateToProp = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProp)(App);
