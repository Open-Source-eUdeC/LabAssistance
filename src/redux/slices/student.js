import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student_data",
  initialState: {
    name: null,
    ip: null,
  },
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
    },
    updateIp: (state, action) => {
      const { ip } = action.payload;
      state.ip = ip;
    }
  }
});

export const { updateName, updateIp } = studentSlice.actions;
export default studentSlice.reducer;
