import { createSlice } from "@reduxjs/toolkit";

let userName = "KARIM";
let userNameSlice = createSlice({
  name: "userName",
  initialState: {
    userName,
  },
  reducers: {
    changeUser: () => {
      console.log("changed");
    },
  },
});

export const { changeUser } = userNameSlice.actions;
export let userNameReducer = userNameSlice.reducer;
