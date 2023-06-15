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

let fetchRoomsToastShownFullfilled = false;
let fetchRoomsToastShownPending = false;
let fetchRoomsToastShownError = false;
let addRoomToastShownFullfilled = false;
let addRoomToastShownPending = false;
let addRoomToastShownError = false;
let deleteRoomToastShownFullfilled = false;
let deleteRoomToastShownPending = false;
let deleteRoomToastShownError = false;

export const RoomsSlice = createSlice({
  name: "rooms",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state, action) => {
        state.status = "pending";
        if (!fetchRoomsToastShownPending) {
          showToast("Fetching rooms...", "pending");
          fetchRoomsToastShownPending = true;
        }
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;

        if (!fetchRoomsToastShownFullfilled) {
          showToast("Rooms fetched successfully!", "success");
          fetchRoomsToastShownFullfilled = true;
        }
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        if (!fetchRoomsToastShownError) {
          showToast("Failed to fetch rooms", "error");
          fetchRoomsToastShownError = true;
        }
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        if (!addRoomToastShownFullfilled) {
          showToast("Room added successfully!", "success");
          addRoomToastShownFullfilled = true;
        }
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.error = action.payload;
        if (!addRoomToastShownError) {
          showToast("Failed to add room", "error");
          addRoomToastShownError = true;
        }
      })
      .addCase(addRoom.pending, (state, action) => {
        state.status = "pending";
        if (!addRoomToastShownPending) {
          showToast("Adding room...", "pending");
          addRoomToastShownPending = true;
        }
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element._id !== action.payload
        );
        if (!deleteRoomToastShownFullfilled) {
          showToast("Room deleted successfully!", "success");
          deleteRoomToastShownFullfilled = true;
        }
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.error = action.payload;
        if (!deleteRoomToastShownError) {
          showToast("Failed to delete room", "error");
          deleteRoomToastShownError = true;
        }
      })
      .addCase(deleteRoom.pending, (state, action) => {
        state.status = "pending";
        if (!deleteRoomToastShownPending) {
          showToast("Deleting room...", "pending");
          deleteRoomToastShownPending = true;
        }
      });
  },
});

export const getRoomsStatus = (state: RootState) => state.rooms.status;
export const getRoomsData = (state: RootState) => state.rooms.data;
export const getRoomsError = (state: RootState) => state.rooms.error;