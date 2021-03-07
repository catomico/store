import React from 'react';
import { withRouter } from 'react-router-dom';
//this above is a higher order compo - takes a compo as agrument and returns a modified compo
//see export default... gives us access to history prop

import './menu-item.styles.scss'

// see the dynamic image styling, much wow video 65 13minutes
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} men-itm`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
      className='bg-img' 
      style={{ 
        backgroundImage: `url(${imageUrl})` 
      }}  
    />
    <div className='contt'>
      <h1 className='ttl'>{title.toUpperCase()}</h1>
      <span className='sbtl'>Shop Now</span>
    </div>
  </div>
)

export default withRouter(MenuItem);