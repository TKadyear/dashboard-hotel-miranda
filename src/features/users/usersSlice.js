import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0));
});
export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});


export const allUsers = state => state.users;

// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default usersSlice.reducer;
