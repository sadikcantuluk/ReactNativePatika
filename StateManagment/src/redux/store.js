import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
//ProductSlice
//AplplicationSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});
