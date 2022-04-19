import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/custom-style.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  counter: 10,
  tasks: [],
};

console.log(initialState.counter);

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATE":
      return {
        ...state,
      };
    case "INCREMENT":
      let actionValue =
        typeof action.payload === "undefined" ? 1 : action.payload;
      actionValue = parseInt(actionValue);
      return {
        ...state,
        counter: state.counter + actionValue,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: (state.counter -= 1),
      };
    case "UPDATE":
      if (action.payload) {
        return {
          ...state,
          counter: parseInt(action.payload),
        };
      }
      break;

    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
      };
    // case "INC_SPECIFIC":
    //   return {
    //     ...state,
    //     counter: state.counter + parseInt(action.payload),
    //   };
    default:
      return state;
  }
};

let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
