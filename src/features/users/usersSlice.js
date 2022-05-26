import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0));
});
export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    updateUser: (state, action) => {
      return state.map(user => user.id === action.payload.id ? action.payload : user);
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id != action.payload.id);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});


export const allUsers = state => state.users;

export default usersSlice.reducer;
