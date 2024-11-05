import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import counterSlice from "../ReduxCounter/CounterSlice";

function UseValue() {
  const count = useSelector((store) => store.counterState.count);
const dispatch = useDispatch();
const acticons = counterSlice.actions;
const increment = ()=>{
    dispatch(acticons.increment())
}

  return (
    <>
      <div>UseValue</div>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
    </>
  );
}

export default UseValue;
