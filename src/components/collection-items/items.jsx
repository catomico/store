import React from 'react';
import Button from '../button/button';

import './items.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='coll-item'> 
    <div
      className='image'
      style={{
        backgroundImage:  `URL(${imageUrl})`
      }}
    />
    <div className='footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
    <Button inverted>Add to Cart</Button>
  </div>
)

export default CollectionItem;