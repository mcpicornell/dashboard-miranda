import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { addBooking, deleteBooking, fetchBookings } from "../asyncThunk";
import type { RootState } from '../../app/store'
import { IBookings } from "../interfaces";

export const BookingsSlice = createSlice({
    name: "bookings",
    initialState: {
      error: null,
      status: "idle",
      booking: "",
      data: [] as IBookings[]
    },
      reducers: {
        setBooking: (state, action) => {
            state.booking = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchBookings.fulfilled, (state, action: PayloadAction<any | IBookings[]>) => {
          state.status = "fulfilled";
          console.log(action)
          state.data = action.payload;
        })
      .addCase(fetchBookings.rejected, (state, action: PayloadAction<any | IBookings[]>) => {
          state.status = "failed";
          state.error = action.payload;
        })
      .addCase(fetchBookings.pending, (state, action: PayloadAction<any | IBookings[]>) => {
          state.status = "pending";
        })

      .addCase(addBooking.fulfilled, (state, action: PayloadAction<any | IBookings>) => {
          state.data = [action.payload, ...state.data];
          
        })
      .addCase(addBooking.rejected, (state, action: PayloadAction<any | IBookings>) => {
          state.error = action.payload;
        })
      .addCase(addBooking.pending, (state, action: PayloadAction<any | IBookings>) => {
          state.status = "pending";          })

      .addCase(deleteBooking.fulfilled, (state, action: PayloadAction<any | IBookings>) => {
          state.data = state.data.filter((element: IBookings) => element.id !==  action.payload.id);

        })
      .addCase(deleteBooking.rejected, (state, action: PayloadAction<any | IBookings>) => {
          state.error = action.payload;
        })
      .addCase(deleteBooking.pending, (state, action) => {
          state.status = "pending";
        })
      }
});

export const {setBooking} = BookingsSlice.actions;

export const getBookingsStatus = (state: RootState) => state.bookings.status;
export const getBookingsData = (state: RootState) => state.bookings.data;
export const getBookingsError = (state: RootState) => state.bookings.error;