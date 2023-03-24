import { combineReducers } from "redux";
import cityReducer from "../citySlice";

export const reducers = combineReducers({
  city: cityReducer,
});
