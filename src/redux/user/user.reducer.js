import { useDebugValue } from "react"
import { bindActionCreators } from "redux"

const INITIAL_STATE = {
  currentUser: null
}

// the initial state for current user will be null since no user is initially logged in. Hence in App.js starts withe state equal to currentUser: null 

// now that we have our initial state, we can pass it into the userReducer. Using ES6 syntax we can pass the default value directly into the parameters bracket (state = INITIAL_STATE, action)
// Note: null is regarded as a Value. therefore if we ever pass null as a value for a new state, this reducer will not fall back to the default null. ie the null will be coming from somewhere else

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
          currentUser: action.payload
      }
    default:
      return state;
  }
}


export default userReducer;

// switch statement:
// all reducers recieve all bindActionCreators, so this must look for a specific one: 
// If the action.type === 'SET_CURRENT_USER' the return ...
  // ...spread into a new object (because we only modify the values that we care about) called state, our current user payload
// otherwise, return the default, which is the current state (not the initial state) so that nothing changes


// a reducer is just a function that gets two properties, a state object that represents an initial state, and an action object that has a type which is a string value - just a name.
// The payload can be anything - pass in an Object, or a function to transform the state.


// {
//   type: "action-name"
//   payload: 
// }

