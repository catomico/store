import React from 'react';

import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

//() => () .. a functional component that renders a div
const CartIcon = ({ toggleCartVisibility, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartVisibility}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemCount }</span>
  </div>
);
 

// mapStateToProps gives access to a reducer folder, in this case we need cart reducer and we pull in the cartItems state.

// thn pass in a value of itemCount (we make this up here).
//Now use redcer method on cartItem to add together the prev total(made up) the cartItem.quantity and start this from 0  

// this is the memoizesd selector and shold not fire the console log
const mapStateToProps = state => {
  console.log('cart state was called');
  return {
    itemCount: selectCartItemsCount(state)
  }
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((subTotalQ, cartItems) => 
//     subTotalQ + cartItems.ItemQuantity, 0
//   )
// });

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);