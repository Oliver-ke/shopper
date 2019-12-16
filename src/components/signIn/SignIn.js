import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';
import './signin.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: '',
			});
		} catch (error) {
			console.log('sign in error', error.message);
		}
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Signin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="email"
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>
					<FormInput
						name="password"
						handleChange={this.handleChange}
						type="password"
						value={this.state.password}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
