import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './signup.scss';

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		return this.setState({ [name]: value });
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("passords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
		}
		return 'hello';
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						label="Display Name"
						value={displayName}
						required
						handleChange={this.handleChange}
					/>
					<FormInput type="email" name="email" label="Email" value={email} required handleChange={this.handleChange} />
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={password}
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						value={confirmPassword}
						required
						handleChange={this.handleChange}
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
