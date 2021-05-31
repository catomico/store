import React from 'react';

import './button.scss';
// this is a stateless functional componentor presentational compo.
// accepts dynamically added style classes

// a button and input can share the type of submit but here we need to also add the form's onSubmit, so start by passing in children and then destructure all otherProps
// In this case children => names that appear on the buttons where they are used.
// other props => properties like class, or type. i.e, in signin form we add a prop of type = submit. but note , that here we add type = button to fix a glitch

// These $ styles are in the button stylesheet

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button 
    type='button'
    className={`
      ${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} 
      custom-button
    `} 

    {...otherProps}
  >
    {children}
  </button>
)

export default Button;