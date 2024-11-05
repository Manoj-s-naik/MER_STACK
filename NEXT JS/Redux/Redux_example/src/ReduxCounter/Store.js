import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import userSlice from "./UserSlice";

const store = configureStore({
    reducer : {
        counterState : counterSlice.reducer,
        userState : userSlice.reducer
    }
})

export default store;