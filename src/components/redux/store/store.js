import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import counterReducer from "../reducers/counter/counterReducer";
import rootReducer from "../reducers/rootReducer";
const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

// const store = createStore(
//   preloadedState,
//   composedEnhancers
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

export default function store(previousState) {
  const store = createStore(rootReducer, previousState, composedEnhancers);

  return store;
}
