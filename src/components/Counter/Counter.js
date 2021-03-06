import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../..";
import { storeTaskData } from "../../services/taskServices";
import TestCounter from "../TestCounter/TestCounter";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  return (
    <div className="top_counter">
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <h2>{counter}</h2>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="btn btn-secondary"
        >
          -
        </button>
      </div>
      <TestCounter />
    </div>
  );
};

export default Counter;
