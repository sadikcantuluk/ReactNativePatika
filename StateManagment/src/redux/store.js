import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import usersReducer from "../redux/userSlice";
//ProductSlice
//AplplicationSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});


