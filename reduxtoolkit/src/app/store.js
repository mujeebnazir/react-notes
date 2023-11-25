//bring configureStore from redux/toolkit;
//step:1
//step2: make reducers/ slices
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
