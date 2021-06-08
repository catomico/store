// add a cart items element inside the cart drop down

// this needs the cart - item that was clicked on

import React from 'react';


const CartItemDown = ({ 
  shopItemDown: { name, price, imageUrl, ItemQuantity } 
}) => {
  return (
    <div>
      <img src={imageUrl} alt='shop-item'/> 
      
      <div>
        <span>{name}</span>
        <span> 
          {ItemQuantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export  default CartItemDown;