import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import taskReducer from "./tasks/taskReducer";

const rootReucer = combineReducers({
  counterReducer: counterReducer,
  taskReducer: taskReducer,
});
export default rootReucer;
