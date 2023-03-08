import { configureStore, createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: {
    Login: false,
    notification: null,
  },
  reducers: {
    togglePupUp(state) {
      state.Login = !state.Login;
    },
  },
});

const store = configureStore({ reducer: login.reducer });

export const loginAction = login.actions;

export default store;
