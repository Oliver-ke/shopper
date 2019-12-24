import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/userAction';
import CustomButton from '../custom-button/CustomButton';

import './signup.scss';

const SignUp = ({ signUpStart }) => {
	const [ formInputs, setFormInputs ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		return setFormInputs({ ...formInputs, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = formInputs;
		if (password !== confirmPassword) {
			return alert("passords don't match");
		}
		return signUpStart({ displayName, email, password });
	};
	const { displayName, email, password, confirmPassword } = formInputs;
	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					label="Display Name"
					value={displayName}
					required
					handleChange={handleChange}
				/>
				<FormInput type="email" name="email" label="Email" value={email} required handleChange={handleChange} />
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					required
					handleChange={handleChange}
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					value={confirmPassword}
					required
					handleChange={handleChange}
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userDetail) => dispatch(signUpStart(userDetail)),
});
export default connect(null, mapDispatchToProps)(SignUp);
