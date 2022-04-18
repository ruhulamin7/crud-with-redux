import axios from "axios";

export const getTaskData = async () => {
  let data = [];
  await axios.get("https://todo-app37.herokuapp.com/loadTodo").then((res) => {
    data = res.data;
  });
  return data;
};

// call api and store data to the database
// /**@param {object} newTask */

export const storeTaskData = async (newTask) => {
  let isAdded = false;
  await axios
    .post("https://todo-app37.herokuapp.com/addTodo", newTask)
    .then((res) => {
      isAdded = res.data;
    });
  return isAdded;
};
