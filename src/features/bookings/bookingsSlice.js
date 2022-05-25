import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const fetchBookings = createAsyncThunk("bookings/fetchBookings", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0));
});

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});


export const bookingsList = state => state.bookings;
export const bookings = id => state => {
  const bookedRoom = [...state.bookings].find(room => room.id === id);
  const descriptionRoom = [...state.rooms].find(room => room.id === bookedRoom.room.id);
  return { ...bookedRoom, room: { ...descriptionRoom.info } };
};


// export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default bookingsSlice.reducer;
