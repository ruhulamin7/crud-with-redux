import * as Types from "../../types/types";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case Types.ADD_TASKS:
      return {
        ...state,
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
