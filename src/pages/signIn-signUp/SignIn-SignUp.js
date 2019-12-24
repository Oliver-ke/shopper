import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signup/SignUp';
import { SignInSignUpContainer } from './signin-signupStyles';

const SignInSignUp = () => {
	return (
		<SignInSignUpContainer>
			<SignIn />
			<SignUp />
		</SignInSignUpContainer>
	);
};

export default SignInSignUp;
