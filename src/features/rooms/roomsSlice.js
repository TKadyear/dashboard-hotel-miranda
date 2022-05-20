import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import update from "immutability-helper";

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
    }
  }
});



export const roomList = state => state.rooms;
export const room = id => state => [...state.rooms].find(room => room.id === id);

export const { reestructureList } = roomsSlice.actions;

export default roomsSlice.reducer;
