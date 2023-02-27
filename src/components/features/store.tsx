import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./slice";


export const Store = configureStore({
     reducer : MyReducer
})