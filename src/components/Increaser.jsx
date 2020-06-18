import React from "react";
import { increment, decrement } from "../store/actions/counter";
import { useSelector, useDispatch } from "react-redux";

function Increaser() {
  const count2 = useSelector(state => state.count);

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleIncrement}>increment</button>
      <span className="counter">{count2}</span>
    </div>
  );
}

export default Increaser;
