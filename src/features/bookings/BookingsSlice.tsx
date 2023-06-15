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

let fetchBookingsToastShownFullfilled = false;
let fetchBookingsToastShownPending = false;
let fetchBookingsToastShownError = false;
let addBookingToastShownFullfilled = false;
let addBookingToastShownPending = false;
let addBookingToastShownError = false;
let deleteBookingToastShownFullfilled = false;
let deleteBookingToastShownPending = false;
let deleteBookingToastShownError = false;

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

        if (!fetchBookingsToastShownFullfilled) {
          showToast("Bookings fetched successfully!", "success");
          fetchBookingsToastShownFullfilled = true;
        }
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

        if (!fetchBookingsToastShownError) {
          showToast("Failed to fetch bookings", "error");
          fetchBookingsToastShownError = true;
        }
      })
      .addCase(fetchBookings.pending, (state, action) => {
        state.status = "pending";

        if (!fetchBookingsToastShownPending) {
          showToast("Fetching bookings...", "pending");
          fetchBookingsToastShownPending = true;
        }
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];

        if (!addBookingToastShownFullfilled) {
          showToast("Booking added successfully!", "success");
          addBookingToastShownFullfilled = true;
        }
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.error = action.payload;

        if (!addBookingToastShownError) {
          showToast("Failed to add booking", "error");
          addBookingToastShownError = true;
        }
      })
      .addCase(addBooking.pending, (state, action) => {
        state.status = "pending";

        if (!addBookingToastShownPending) {
          showToast("Adding booking...", "pending");
          addBookingToastShownPending = true;
        }
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element._id !== action.payload
        );

        if (!deleteBookingToastShownFullfilled) {
          showToast("Booking deleted successfully!", "success");
          deleteBookingToastShownFullfilled = true;
        }
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.error = action.payload;

        if (!deleteBookingToastShownError) {
          showToast("Failed to delete booking", "error");
          deleteBookingToastShownError = true;
        }
      })
      .addCase(deleteBooking.pending, (state, action) => {
        state.status = "pending";

        if (!deleteBookingToastShownPending) {
          showToast("Deleting booking...", "pending");
          deleteBookingToastShownPending = true;
        }
      });
  },
});

export const getBookingsStatus = (state: RootState) => state.bookings.status;
export const getBookingsData = (state: RootState) => state.bookings.data;
export const getBookingsError = (state: RootState) => state.bookings.error;