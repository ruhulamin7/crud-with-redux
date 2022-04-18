// get createStore() from 'redux'
import { createStore } from "redux";

// initialize a store object
const initializeState = {
  // Title: "Take bath",
  // Description: "Go to the Bathroom",
  // Priority: "High",
  counter: 0,
  sum: 0,
  task: [],
  taskForm: {
    Title: "Ruhul",
    Description: "Web Developer",
  },
};

// do jobs on change any action
// reducer
function counterReducer(state = initializeState, action) {
  switch (action.type) {
    case "GET_COUNTER":
      return {
        ...state,
      };
    case "INCREMENT":
      return {
        ...state,
        sum: (state.sum += 1),
      };
    case "DECREMENT":
      return {
        ...state,
        sum: (state.sum -= 1),
      };
    case "PASS_DYNAMIC_DATA":
      return {
        ...state,
        sum: state.sum + action.payload,
      };
    case "ADD_NEW_TASK":
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case "ADD_NEW_TASK_FORM":
      console.log(action.payload);

      return {
        ...state,
        taskForm: action.payload,
      };
    default:
      return state;
  }
}

//  create a store
let store = createStore(counterReducer);

// listen that anything changes in the store
store.subscribe(() => console.log(store.getState()));
// get data
store.dispatch({ type: "GET_COUNTER" });
// update data in the store / global store
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });

// pass dynamic data
store.dispatch({ type: "PASS_DYNAMIC_DATA", payload: 30 });

const taskData = { task1: "task1", description: "description" };
const taskForm = {
  task1: "task1",
  description: "description",
};
store.dispatch({ type: "ADD_NEW_TASK", payload: taskData });
store.dispatch({ type: "ADD_NEW_TASK_FORM", payload: taskForm });
