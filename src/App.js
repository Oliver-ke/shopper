import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignInSignUpPage from './pages/signIn-signUp/SignIn-SignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import './App.css';

// switch is used to render only one component that matches a pattern
// it differ from a just Route because Route would render all matches
// if placed without exact

class App extends Component {
	state = {
		currentUser: null,
	};
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: null });
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
