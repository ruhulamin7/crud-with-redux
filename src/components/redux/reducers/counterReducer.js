import * as Types from "../types/Types";

const initialState = {
  counter: 10,
  tasks: [],
};

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

    case Types.GET_TASKS:
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

export default counterReducer;
