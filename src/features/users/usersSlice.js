import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
  }
});


export const allUsers = state => state.users;

// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default usersSlice.reducer;
