import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IRooms } from "../interfaces";
import { fetchRooms, addRoom, deleteRoom } from "./fetchRooms";
import { showToast } from "../functions";

interface InitState {
  error: any;
  status: string;
  data: IRooms[];
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
};

export const RoomsSlice = createSlice({
  name: "rooms",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state, action) => {
        state.status = "pending";
        showToast("Fetching rooms...", "pending");
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Failed to fetch rooms", "error");
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        showToast("Room added successfully!", "success");
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.error = action.payload;
        showToast("Failed to add room", "error");
      })
      .addCase(addRoom.pending, (state, action) => {
        state.status = "pending";
        showToast("Adding room...", "pending");
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element._id !== action.payload
        );
        showToast("Room deleted successfully!", "success");
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.error = action.payload;
        showToast("Failed to delete room", "error");
      })
      .addCase(deleteRoom.pending, (state, action) => {
        state.status = "pending";
        showToast("Deleting room...", "pending");
      });
  },
});

export const getRoomsStatus = (state: RootState) => state.rooms.status;
export const getRoomsData = (state: RootState) => state.rooms.data;
export const getRoomsError = (state: RootState) => state.rooms.error;
