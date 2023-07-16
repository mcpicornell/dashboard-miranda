import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IBookings } from "../interfaces";
import { addBooking, deleteBooking, fetchBookings } from "./fetchBookings";
import { showToast } from "../functions";

interface InitState {
  error: any;
  status: string;
  data: IBookings[];
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
};

export const BookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

        showToast("Failed to fetch bookings", "error");
      })
      .addCase(fetchBookings.pending, (state, action) => {
        state.status = "pending";

        showToast("Fetching bookings...", "pending");
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];

        showToast("Booking added successfully!", "success");
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.error = action.payload;

        showToast("Failed to add booking", "error");
      })
      .addCase(addBooking.pending, (state, action) => {
        state.status = "pending";

        showToast("Adding booking...", "pending");
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element._id !== action.payload
        );

        showToast("Booking deleted successfully!", "success");
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.error = action.payload;

        showToast("Failed to delete booking", "error");
      })
      .addCase(deleteBooking.pending, (state, action) => {
        state.status = "pending";

        showToast("Deleting booking...", "pending");
      });
  },
});

export const getBookingsStatus = (state: RootState) => state.bookings.status;
export const getBookingsData = (state: RootState) => state.bookings.data;
export const getBookingsError = (state: RootState) => state.bookings.error;
