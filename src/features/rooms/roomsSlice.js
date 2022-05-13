import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
  }
});



export const roomList = state => state.bookings;
export const room = id => state => [...state.rooms].find(room => room.id === id);

// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default roomsSlice.reducer;
