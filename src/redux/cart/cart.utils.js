// cart.utils is where to put any reusable functions relating to redux.

// remeber that cartItems already exists inside the cart reducer and it is a state object prop, and recieves a payload from cart actions.

export const addMoreToCart = (cartItems, cartItemPlus) => {
  const existingCartItem = cartItems.find(cartItemX => 
    cartItemX.id === cartItemPlus.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItemX => 
      cartItemX.id === cartItemPlus.id 
        ? { ...cartItemX, ItemQuantity: cartItemX.ItemQuantity + 1 }
        : cartItemX
    );
  }

  return [...cartItems, { ...cartItemPlus, ItemQuantity: 1 }]
};

// import nothing, just export a variable with a function

// write a function that takes two arguments:
  // 1. all the existing cart items that are inside the cart items array
  // 2. the cart item that we want to add / increase quantity of

// First make a constant variable for the existing cart items. 
//Look in the cart item array to see if the item to add already exists.
// .find() returns the first item in an array that satisfies the condion given.
// The condition is: go through each individual cart item and check if the id mathches the id of the one to add. if its true the cart item will be set as the constant, if not true it will be undefined by default

// Second, if there is an existing cart item then return a new array by mapping the cart items and returning into the array items that satisfy the condition. This new array is the new version of state that React uses to re-render properly.
// cartItems.map() must recieve cartItems and then test cart items ids again as above.
// if there is a match, do two things:
//   1, spread into a new object; the cartItem, and create a new object item called 'quantity' that is set to quantity +1
// If there is no match, hen just return the original cart item since there is no need to update state.
//But this assumes there is already a cart item in the cart, what if there is none, but we add a new one?

//three
// So if existing cart item is not satisfied then return an array that has the other original cart items spread into it, and give it a new object which has the cart item to add spread in, and give it a base quantity of onemptied. This quantity property is created new and set to one

// finally do something with it, go import it into the reducer