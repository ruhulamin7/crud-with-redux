import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../..";
import { storeTaskData } from "../../services/taskServices";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
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
  );
};

export default Counter;
