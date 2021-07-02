import React from 'react';
import Button from '../button/button';

import { connect } from 'react-redux';
import CartItemDown from '../cart-item/cart-item';
// State has cartItems as a state object, here connect is used to match it tpo props
//CartItemDown is the jsx element that will appear in the dropdown

import './cart-down.scss';

const CartDown = ({ cartItems }) => (
  <div className='cart-down'>
    <div className='cart-items'>
      {cartItems.map(shopItem => (
        <CartItemDown 
        key={shopItem.id} shopItem={shopItem} 
        />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
)
 
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDown);