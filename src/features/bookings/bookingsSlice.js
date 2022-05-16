import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { splitForPagination } from "../../services/pagination";
export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: initialState,
  reducers: {
  }
});


export const bookingsList = state => splitForPagination(state.bookings);
export const bookings = id => state => {
  const bookedRoom = [...state.bookings].find(room => room.id === id);
  const descriptionRoom = [...state.rooms].find(room => room.id === bookedRoom.room.id);
  return { ...bookedRoom, room: { ...descriptionRoom.info } };
};


// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default bookingsSlice.reducer;
