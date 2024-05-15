import { ConfigureStore } from "@reduxjs/toolkit";
// node_modules/.vite/deps/
import todoReducer from "./todoSlice";

export const store = new ConfigureStore();
