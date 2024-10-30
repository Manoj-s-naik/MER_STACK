import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

const store = configureStore({
    reducer : {
        counterState : counterSlice.reducer
    }
})

export default store;