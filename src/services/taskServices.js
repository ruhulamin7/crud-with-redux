import axios from "axios";

export const getTaskData = async () => {
  let data = [];
  await axios.get("https://todo-app37.herokuapp.com/loadTodo").then((res) => {
    data = res.data;
  });
  return data;
};
