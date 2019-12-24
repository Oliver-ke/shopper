import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import Spinner from '../Spinner/Spinner';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSignInLoading } from '../../redux/user/userSelector';
import './signin.scss';

const SignIn = ({ googleSignInStart, emailSignInStart, isLoading }) => {
	const [ password, setPassword ] = useState('');
	const [ email, setEmail ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		emailSignInStart({ email, password });
	};
	return (
		<div className="sign-in">
			{isLoading && <Spinner />}
			<h2>I already have an account</h2>
			<span>Signin with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					label="email"
					handleChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
				<FormInput
					name="password"
					handleChange={(e) => setPassword(e.target.value)}
					type="password"
					value={password}
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
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsSignInLoading,
});

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
