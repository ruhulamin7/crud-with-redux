import axios from "axios";
import * as Types from "../types/Types";

export const getTaskDataAction = () => (dispatch) => {
  axios.get("https://todo-app37.herokuapp.com/loadTodo").then((res) => {
    let data = res.data;
    data.sort();
    data.reverse();
    dispatch({ type: Types.GET_TASKS, payload: data });
  });
};

export const storeTaskDataAction = (newTask) => (dispatch) => {
  axios
    .post("https://todo-app37.herokuapp.com/addTodo", newTask)
    .then((res) => {
      dispatch({ type: "ADD_TASK", payload: newTask });
      dispatch(getTaskDataAction());
    });
};
