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
import './header.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-box' to="/">
      <Logo className='logo' />
    </Link>

    <div className='opts-box'>      {
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
    </div>
  </div>
)

// map state to props takes the state from the reducer and creates an object
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// we pass connect two functions (the second is optional) 
// the first is a function that allows us to acces the state throught the reducer, we are connecting state to header
// export default Header;
export default connect(mapStateToProps)(Header);

// now we can move the state from app.js to header.js