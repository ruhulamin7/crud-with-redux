import * as types from "../../types/types";

const initialState = {
  tasks: [],
  taskForm: {
    Title: "",
    Description: "",
    Priority: "",
  },
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case types.ADD_TASKS:
      console.log("add task", action.payload);
      return {
        ...state,
        taskForm: {
          Title: "",
          Description: "",
          Priority: "",
        },
      };
    case types.CHANGE_TASK_INPUT:
      console.log(action.payload.name, action.payload.value);
      let taskForm = { ...state.taskForm };
      taskForm[action.payload.name] = action.payload.value;
      return {
        ...state,
        taskForm: taskForm,
      };

    case types.GET_SINGLE_TASKS:
      return {
        ...state,
        taskForm: action.payload,
      };
    case types.UPDATE_SINGLE_TASKS:
      console.log("payload", action.payload);
      return {
        ...state,
        taskForm: action.payload,
      };
    // case "INC_SPECIFIC":
    //   return {
    //     ...state,
    //     counter: state.counterReducer.counter + parseInt(action.payload),
    //   };
    default:
      return state;
  }
};

export default taskReducer;
