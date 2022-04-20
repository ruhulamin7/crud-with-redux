import * as Types from "../../types/types";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_STATE:
      return {
        ...state,
      };
    case Types.INCREMENT:
      let actionValue =
        typeof action.payload === "undefined" ? 1 : action.payload;
      actionValue = parseInt(actionValue);
      return {
        ...state,
        counter: state.counter + actionValue,
      };
    case Types.DECREMENT:
      return {
        ...state,
        counter: (state.counter -= 1),
      };
    case Types.UPDATE:
      if (action.payload) {
        return {
          ...state,
          counter: parseInt(action.payload),
        };
      }
      break;

    default:
      return state;
  }
};

export default counterReducer;
