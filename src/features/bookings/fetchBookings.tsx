import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBookings } from "../interfaces";
import "cross-fetch/polyfill";
import { fetchApi, getApi } from "../fetchApi";


export const fetchBookings = createAsyncThunk<IBookings[]>(
  "bookings/fetchBookings",
  async () => {
    try {
      const response = await getApi("https://g0mvg1qy2l.execute-api.eu-west-3.amazonaws.com/dev/api/bookings");
      return response.data.bookings;
    } catch (error) {
      console.error("Error to get bookings:", error);
      throw error;
    }
  }
);

export const addBooking = createAsyncThunk<IBookings, IBookings>(
  "bookings/addBooking",
  async (bookingObj: IBookings) => {
    try {
      const response = await fetchApi(bookingObj, "POST", "https://g0mvg1qy2l.execute-api.eu-west-3.amazonaws.com/dev/api/bookings");
      return response.data.bookingPosted;
    } catch (error) {
      console.error("Error to add bookings:", error);
      throw error;
    }
  }
);

export const deleteBooking = createAsyncThunk<string, string>(
  "bookings/deleteBooking",
  async (roomId) => {
    try {
      await fetchApi(roomId, "DELETE", `https://g0mvg1qy2l.execute-api.eu-west-3.amazonaws.com/dev/api/bookings/${roomId}`);
      return roomId;
    } catch (error) {
      console.error("Error to delete booking:", error);
      throw error;
    }
  }
);

export const editBooking = createAsyncThunk<IBookings, IBookings>(
  "bookings/editBooking",
  async (bookingObj) => {
    try {
      const response = await fetchApi(
        bookingObj,
        "PUT",
        `https://g0mvg1qy2l.execute-api.eu-west-3.amazonaws.com/dev/api/bookings/${bookingObj._id}`
      );
      return response.data.booking;
    } catch (error) {
      console.error("Error to update booking:", error);
      throw error;
    }
  }
);
