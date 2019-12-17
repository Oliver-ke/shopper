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
import './header.scss';

const Header = ({ currentUser, hidden, itemCount }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<Fragment>
						<div className="option" onClick={() => auth.signOut()}>
							Sign Out
						</div>
						<CartIcon itemCount={itemCount} />
					</Fragment>
				) : (
					<Link className="option" to="/signin">
						Sign In
					</Link>
				)}
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
