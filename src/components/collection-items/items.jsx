import React from 'react';
import Button from '../button/button';

import { connect } from 'react-redux';
import { addItemsToCart } from '../../redux/cart/cart.action';

import './items.scss';

const CollectionItem = ({ shopItem, addItemsToCart }) => {
  const { name, price, imageUrl } = shopItem;

  return (
    <div className='coll-item'> 
      <div
        className='image'
        style={{
          backgroundImage: `URL(${imageUrl})`
        }}
      />
      <div className='footer'>
        <span className='name'>{ name }</span>
        <span className='price'>{ price }</span>
      </div>
      <Button onClick={() => addItemsToCart(shopItem)} inverted>
        Add to Cart
      </Button>
    </div>
  );
};
 
const mapDispatchToProps = dispatch => ({
  addItemsToCart: shopItem => dispatch(addItemsToCart(shopItem))
});

export default connect(null, mapDispatchToProps)(CollectionItem);