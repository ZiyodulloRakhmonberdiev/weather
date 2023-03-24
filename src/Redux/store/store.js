import { configureStore } from "@reduxjs/toolkit";
import city from "../features/city/citySlice";
// Store config

export const rootReducer = {
  city: city,
};
export const store = configureStore({
  reducer: rootReducer,
});
