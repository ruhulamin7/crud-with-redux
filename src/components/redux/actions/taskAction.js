import axios from "axios";
import * as types from "../types/types";

export const getTaskDataAction = () => (dispatch) => {
  axios.get("https://todo-app37.herokuapp.com/loadTodo").then((res) => {
    let data = res.data;
    data.sort();
    data.reverse();
    dispatch({ type: types.GET_TASKS, payload: data });
  });
};
export const getSingleTaskDataAction = (id) => (dispatch) => {
  console.log(id);
  axios
    .get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`)
    .then((res) => {
      let data = res.data;
      dispatch({ type: types.GET_SINGLE_TASKS, payload: data });
    });
};

export const storeTaskDataAction = (taskForm) => (dispatch) => {
  if (!taskForm.Title) {
    alert("Please give a title");
    return;
  } else if (!taskForm.Description) {
    alert("Please give a description");
    return;
  } else if (!taskForm.Priority) {
    alert("Please set priority");
    return;
  }
  axios
    .post("https://todo-app37.herokuapp.com/addTodo", taskForm)
    .then((res) => {
      console.log("axios add", taskForm);
      dispatch({ type: types.ADD_TASKS, payload: taskForm });
      dispatch(getTaskDataAction());
    });
};

export const updateTaskDataAction = (taskForm, id) => (dispatch) => {
  console.log("update", taskForm, id);
  if (!taskForm.Title) {
    alert("Please give a title");
    return;
  } else if (!taskForm.Description) {
    alert("Please give a description");
    return;
  } else if (!taskForm.Priority) {
    alert("Please set priority");
    return;
  }
  axios
    .patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, taskForm)
    .then((res) => {
      console.log(res, taskForm);
      if (res.data.ok === 1) {
        alert("Task Updated !");
      } else {
        alert("something went wrong !");
      }
      dispatch({ type: types.UPDATE_SINGLE_TASKS, payload: taskForm });
      dispatch(getTaskDataAction());
    });
};

export const deleteTaskDataAction = (id) => (dispatch) => {
  axios
    .delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
    .then((res) => {
      if (res.data.ok === 1) {
        dispatch(getTaskDataAction());
        alert("Task Deleted !");
      } else {
        alert("something went wrong !");
      }
      // dispatch({ type: types.UPDATE_SINGLE_TASKS, payload: taskForm });
      // dispatch(getTaskDataAction());
    });
};
export const handleChangeTextInputAction = (name, value) => (dispatch) => {
  const formData = {
    name,
    value,
  };
  dispatch({ type: types.CHANGE_TASK_INPUT, payload: formData });
};
