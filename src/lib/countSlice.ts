import { createSlice } from "@reduxjs/toolkit";

let initialState = { counter: 0 };
let counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.counter += 1;
      console.log("increase");
    },
    decrease: () => {
      console.log("decrease");
    },
    increaseByA: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export let counterReducer = counterSlice.reducer;
export let { increase, decrease, increaseByA } = counterSlice.actions;
