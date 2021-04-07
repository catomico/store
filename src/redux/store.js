import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

// the way that we have configured our middleware is direct from redux documentation
// the store expects middleware that is an array.
// inside the array is our logger data

const middlewares = [logger];


// the store is made with a redux funcion that gets our root reducer and what ever the logger returns, which we spread into apply middleware
// what its doing is taking any methods or values from our array, into the function call as individual arguments.
// so if we want to add anything else we add it to the logger array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

// remember to add it to the <Provider> wrapper in index.js