import CartActionTypes from './cart.types';
import { addMoreToCart } from './cart.utils';

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
};

// set vs toggle are methods to choose from
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addMoreToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

// case CartActionTypes.ADD_ITEMS:
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload]
//       };