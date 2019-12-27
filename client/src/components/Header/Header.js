import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropDown';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { signOutStart } from '../../redux/user/userAction';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { LogoContainer, HeaderContainer, OptionDiv, OptionLink, OptionsContainer } from './headerStyles';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/">Home</OptionLink>
				<OptionLink to="/shop">Shop</OptionLink>
				{currentUser ? (
					<Fragment>
						<OptionDiv onClick={() => signOutStart()}>Sign Out</OptionDiv>
					</Fragment>
				) : (
					<OptionLink to="/signin">Sign In</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{!hidden && <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
