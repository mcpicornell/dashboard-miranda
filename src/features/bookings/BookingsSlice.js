import { createSlice} from "@reduxjs/toolkit"
import { addBooking, deleteBooking, fetchBookings } from "../asyncThunk";

export const BookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        error: null,
        status: "idle",
        booking: "",
        data: []
      },

      reducers: {
        setBooking: (state, action) => {
            state.booking = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchBookings.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
          })
        .addCase(fetchBookings.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchBookings.pending, (state, action) => {
            state.status = "loading";
          })

        .addCase(addBooking.fulfilled, (state, action) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addBooking.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(addBooking.pending, (state, action) => {
            //GESTIONAR
          })

        .addCase(deleteBooking.fulfilled, (state, action) => {
          state.data = state.data.filter((user) => user.id !==  action.payload.id);

          })
        .addCase(deleteBooking.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteBooking.pending, (state, action) => {
            //GESTIONAR

          })
      },

});

export const {setBooking} = UsersSlice.actions;

export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsData = (state) => state.bookings.data;
export const getBookingsError = (state) => state.bookings.error;