import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
    delta: 1,
  },
  reducers: {
    increment: (state) => {
      state.count += state.delta;
    },
    decrement: (state) => {
      state.count -= state.delta;
    },

    updateDeltaHandler: (state, params) => {
      const delta = params.payload;
      state.delta = delta;
    },
  },
});

export default counterSlice;
