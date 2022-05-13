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


export const allContact = state => state.contact;

// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default contactSlice.reducer;
