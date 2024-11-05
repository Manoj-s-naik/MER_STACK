import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
    user: null,
    error: null,
  },
  reducers: {
    onPending: (state) => {
      state.user = null;
      state.isLoading = true;
      state.error = null;
    },
    onRejected: (state, params) => {
      state.user = null;
      state.isLoading = false;
      state.error = params.payload;
    },
    onFullfilled: (state, params) => {
      state.user = params.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
});
const userActions = userSlice.actions;
export { userActions };
export default userSlice;
