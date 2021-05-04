// prev added User.Action.Types to the reducer to make sure that the action SET_CURRENT_USER only comes from one place, import add it here.
// the UserActionTypes is imported so that it can be used here, then exported and picked up by the reducer

import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

// This is the hardcoded way to set the current user, which is referenced in the user reducer, but best practice is to keep consitance in any place that references the string. Here is what is currently in the user reducer:
// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'SET_CURRENT_USER':
//       return {
//         ...state,
//           currentUser: action.payload
//       }
//     default:
//       return state;
//   }
// }
// export const setCurrentUser = user => ({
//   type: 'SET_CURRENT_USER',
//   payload: user
// });

// See user.types.js
// export const UserActionTypes = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER'
// };