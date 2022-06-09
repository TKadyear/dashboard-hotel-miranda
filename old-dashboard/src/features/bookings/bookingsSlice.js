import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const fetchBookings = createAsyncThunk("bookings/fetchBookings", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0));
});

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
    updateBookedRoom: (state, action) => {
      return state.map(room => room.id === action.payload.id ? action.payload : room);
    },
    deleteBookedRoom: (state, action) => {
      return state.filter(room => room.id != action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});


export const bookingsList = state => state.bookings;
/* IMPROVE Booking must be a single endpoint with the all necesary data */
export const bookings = id => state => {
  const bookedRoom = [...state.bookings].find(room => room.id === id);
  const descriptionRoom = [...state.rooms].find(room => room.id === bookedRoom.room.id);
  return { ...bookedRoom, room: { ...descriptionRoom.info } };
};



export default bookingsSlice.reducer;
