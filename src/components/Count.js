import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.counterReducer.counter);
  return <h1> {count}</h1>;
};

export default Count;
