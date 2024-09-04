import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./countSlice";
import { userNameReducer } from "./userNameSlice";

//wating for reducers
export let store = configureStore({
  reducer: {
    counter: counterReducer,
    userName: userNameReducer,
  },
});
