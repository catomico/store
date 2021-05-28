// PROBLEM
// when a user logs in with firebase the header component updates to add on a button called 'LOG OUT', but it does not remove the 'LOGIN' button, even though the redirect is in place to stop the user navigating to the Login page accidentally

// PREFFERED OUTCOME
// if the user is logged in, then the header compo should not display the login button

// CURRENT OUTCOME
// the state is not being updated

// to update the state: action -> reducer -> props
// if the current user is null then display the link or if current user is !null do not display the link

import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

// connect is a higher order function, allows us to bring in the user reducer - see export line at bottom
import { connect } from 'react-redux';
 
import { ReactComponent as Logo } from '../../assets/pets.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDown from '../cart-down/cart-down';
import './header.scss';

const Header = ({ currentUser, cartHidden }) => (
  <div className='header'>
    <Link className='logo-box' to="/">
      <Logo className='logo' />
    </Link>

    <div className='opts-box'>      
      {
        currentUser ? null
        : <Link className='opts' to="/signin">LOGIN</Link>
      }

          {/* <Link className='opts' to="/signin">
                LOGIN
              </Link> */}

      <Link className='opts' to="/shop">
        SHOP
      </Link>

      <Link className='opts' to="/contact">
        CONTACT
      </Link>

      {
        currentUser ?
        <div className='opts' onClick={() => auth.signOut()}>LOG OUT</div>
        : <Link className='opts' to='./signin'></Link>
      }

      <CartIcon />

    </div>
   
    { cartHidden ? null : <CartDown /> }
  </div>
)

// map state to props takes the state from the reducer and creates an object
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

// when adding in the cart state, and cartHidden state, we must destructure, but this is a different/new way to destructure off of state. 
// from state we want usre, from user, we want currentUser 
const mapStateToProps = ({ user: { currentUser }, cart: { cartHidden } }) => ({
  currentUser,
  cartHidden
});

// we pass connect two functions (the second is optional) 
// the first is a function that allows us to acces the state throught the reducer, we are connecting state to header
// export default Header;
export default connect(mapStateToProps)(Header);

// now we can move the state from app.js to header.js