import CartActionTypes from './cart.types';

export const toggleCartVisibility = visibility => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY
  // payload: visibility  don't need a payload true or false
  // its actually an optional property on the action object
});


// const is a variable
// (inputProps) is to pass in some juicy inputProps
// => () is a cool function .. that can render some jsx

// const nameA = (inputProps) => (<div> </div>);

// or an object 

// const nameB = (inputProps) => ({objectKey: property});
