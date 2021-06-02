import React from 'react';

import CollectionItem from '../collection-items/items';
import './previews.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='coll-prev'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((shopItem, idx) => idx < 4)
        .map(shopItem => (
          <CollectionItem key={shopItem.id} shopItem={shopItem} />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;


//   {items
//     .filter((i, idx) => idx < 4)
//     .map(({ id, ...otherItemProps }) => (
//     <CollectionItem key={id} {...otherItemProps} />
//   ))} 

