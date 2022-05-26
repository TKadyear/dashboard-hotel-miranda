import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const fetchContact = createAsyncThunk("contact/fetchContact", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0));
});

export const contactSlice = createSlice({
  name: "contact",
  initialState: [],
  reducers: {
    archiveMessage: (state, action) => {
      const newState = state.map(room => room.id === action.payload.id ? action.payload : room);
      return newState;
    },
    deleteMessage: (state, action) => {
      return state.filter(room => room.id != action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});

export const allContact = state => [...state.contact].sort((a, b) => {
  const dateA = new Date(a.review.date);
  const dateB = new Date(b.review.date);
  return dateA.getTime() - dateB.getTime();
});


export const { archiveMessage, deleteMessage } = contactSlice.actions;

export default contactSlice.reducer;
