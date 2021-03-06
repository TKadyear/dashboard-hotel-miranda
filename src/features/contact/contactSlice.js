import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    createNewReview: (state, action) => {
      return [...state, action.payload];
    }
  }
});

// IMPROVE ?

export const allContact = state => [...state.contact].sort((a, b) => {
  const dateA = new Date(a.review.date);
  const dateB = new Date(b.review.date);
  return dateA.getTime() - dateB.getTime();
});

// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default contactSlice.reducer;
