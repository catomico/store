// add a cart items element inside the cart drop down

// this needs the cart - item that was clicked on

import React from 'react';

import './cart-item.scss';

const CartItemDown = ({ 
  shopItem: { name, price, imageUrl, ItemQuantity } 
}) => (
    <div className='cart-item'>
      <div className='img-col'>
        <img src={imageUrl} alt='shop-item'/> 
      </div>

      <div className='item-details'>
        <span className='name'>{name}</span>
        <span> 
          {ItemQuantity} x ${price}
        </span>
      </div>
    </div>
  );

export  default CartItemDown;