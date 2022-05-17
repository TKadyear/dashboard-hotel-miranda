import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import bookingsReducer from "../features/bookings/bookingsSlice";
import contactReducer from "../features/contact/contactSlice";
import roomsReducer from "../features/rooms/roomsSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    bookings: bookingsReducer,
    contact: contactReducer,
    rooms: roomsReducer
  }
});
