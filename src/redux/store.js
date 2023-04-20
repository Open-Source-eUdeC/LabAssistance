import { configureStore } from "@reduxjs/toolkit";
//
import studentReducer from "./slices/student";

const store = configureStore({ // Store config
  reducer: {
    student_data: studentReducer
  },
  devTools: true
});

export default store;
