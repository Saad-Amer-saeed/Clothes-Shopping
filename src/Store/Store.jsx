import { configureStore } from "@reduxjs/toolkit";
import handelSlicee from "../Slice/CartSlice";
const store = configureStore({
  reducer: {
    HandelApp: handelSlicee,
  },
});

export default store;
