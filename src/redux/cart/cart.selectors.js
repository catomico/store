import { createSelector } from 'reselect';

// reselect libraray helps with memoisation.
// when mapStateTo Props keeps firing even though there was no change to state (see cart-icon.js --> console.log)

// we are going to move the code from mapStateToProps in cart-icon to here
// There are two types of selectors.
// 1. input selector
// 2. output selector

// the function takes the whole state and returns a SecurityPolicyViolationEvent, one layer deep. i.e. we just want the cart part of state


//this is the input selector
const selectCart = state => state.cart;

//this is output selector takes two args: collection of input selectors in an array, and a function (in order they are written i.e., (cart, user)). nad then output the part we want
export const selectCartItems = createSelector(
  [selectCart], (cart) => 
  cart.cartItems
);

// now add the cart quanttity selector
// this time the inpu selector is the first one we made, just cause its there already and we can use it

//selectCartItemsCount might be => selectItemCount
export const selectCartItemsCount = createSelector(
  [selectCartItems], (cartItems) =>
  cartItems.reduce((subTotalQ, cartItems) => 
    subTotalQ + cartItems.ItemQuantity, 0
  )
);