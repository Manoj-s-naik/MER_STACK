import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import counterSlice from "../ReduxCounter/CounterSlice";

function ReduxInputCounter() {
  const [value, setvalue] = useState("");
  const count = useSelector((state) => state.counterState.count);
  const dispatch = useDispatch();
  const actions = counterSlice.actions;

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  const updateDeltaHandler = () => {
    dispatch(actions.updateDeltaHandler(Number(value)));
    setvalue("");
  };

  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          value={value}
        />
        <button onClick={updateDeltaHandler}>Update delta</button>
      </div>
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

export default ReduxInputCounter;
