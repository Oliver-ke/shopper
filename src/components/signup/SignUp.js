import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/userAction';
import CustomButton from '../custom-button/CustomButton';

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
	handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		const { signUpStart } = this.props;
		if (password !== confirmPassword) {
			return alert("passords don't match");
		}
		return signUpStart({ displayName, email, password });
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

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userDetail) => dispatch(signUpStart(userDetail)),
});
export default connect(null, mapDispatchToProps)(SignUp);
