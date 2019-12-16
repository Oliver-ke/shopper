import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signup/SignUp';
import './signin-signup.scss';

const SignInSignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInSignUp;
