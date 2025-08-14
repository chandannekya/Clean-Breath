import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/Auth";
import blogReducer from "../slices/BlogsData";
const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export default rootReducer;
