import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropDown';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { LogoContainer, HeaderContainer, OptionDiv, OptionLink, OptionsContainer } from './headerStyles';

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/">Home</OptionLink>
				<OptionLink to="/shop">Shop</OptionLink>
				<OptionLink to="/contact">Contact</OptionLink>
				{currentUser ? (
					<Fragment>
						<OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
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
export default connect(mapStateToProps)(Header);
