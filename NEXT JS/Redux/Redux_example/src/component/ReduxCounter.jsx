import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import counterSlice from "../CounterSlice";
function ReduxCounter() {
  const count = useSelector((store) => store.counterState.count);
  const dispatch = useDispatch();
  const actions = counterSlice.actions;

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default ReduxCounter;
