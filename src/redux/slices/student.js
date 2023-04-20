import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student_data",
  initialState: {
    name: null
  },
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
    },
  }
});

export const { updateName } = studentSlice.actions;
export default studentSlice.reducer;
