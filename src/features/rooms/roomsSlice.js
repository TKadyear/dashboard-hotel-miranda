import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import update from "immutability-helper";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0));
});

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    reestructureList: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      return update(state, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, state[dragIndex]],
        ],
      });
    },
    updateRoom: (state, action) => {
      return state.map(room => room.id === action.payload.id ? action.payload : room);
    },
    deleteRoom: (state, action) => {
      return state.filter(room => room.id != action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});



export const roomList = state => state.rooms;
export const getRoom = id => state => [...state.rooms].find(room => room.id === id);

export const { reestructureList, updateRoom, deleteRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
