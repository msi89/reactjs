import React, { useReducer } from "react";
import { increment, decrement } from "../store/actions/counter";
import counterReducer from "../store/reducers/counter";

const Counter = () => {
  const initialStates = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialStates);

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
      <span className="counter">{state.count}</span>
    </div>
  );
};

export default Counter;
