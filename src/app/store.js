import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slice/tokenSlice";
import userReducer from "./slice/userSlice";
import editorReducer from "./slice/editorSlice"

export const store = configureStore({
  reducer :{
    token: tokenReducer,
    user: userReducer,
    editor: editorReducer,
  }
});