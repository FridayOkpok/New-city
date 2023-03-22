import { configureStore, createSlice } from "@reduxjs/toolkit";
import Quote from "./QuoteStore";

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

const store = configureStore({
  reducer: { login: login.reducer, Quote: Quote.reducer },
});

export const loginAction = login.actions;

export default store;
