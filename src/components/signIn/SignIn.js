import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userAction';
import { connect } from 'react-redux';
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
		const { emailSignInStart } = this.props;
		emailSignInStart({ email, password });
	};

	render() {
		const { googleSignInStart } = this.props;
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
						<CustomButton type="button" isGoogleSignIn={true} onClick={googleSignInStart}>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword)),
});
export default connect(null, mapDispatchToProps)(SignIn);
