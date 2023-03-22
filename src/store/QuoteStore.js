import { createSlice } from "@reduxjs/toolkit";

const Quote = createSlice({
  name: "quote-input",
  initialState: {
    FromToInput: {},
    Appartment: {},
  },
  reducers: {
    getFromToInput(state, action) {
      state.FromToInput = action.payload;
    },

    getAppartmentInput(state, action) {
      state.Appartment = action.payload;
    },

    storeUserInput(state) {
      let userDetails = [state.FromToInput, state.Appartment];

      localStorage.setItem("UserQuote", JSON.stringify(userDetails));
    },
  },
});

export const QuoteAction = Quote.actions;

export default Quote;
