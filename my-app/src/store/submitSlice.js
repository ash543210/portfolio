import createSlice from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "submit",
  initialState: { message: "", email: "" },
  reducers: {
    update(data) {
      state.message = data.message;
      state.email = data.email;
    },
  },
});

export const submitActions = submitSlice.actions;

export default submitSlice;
