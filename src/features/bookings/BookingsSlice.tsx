// import { createSlice, PayloadAction} from "@reduxjs/toolkit"
// import { addBooking, deleteBooking, fetchBookings, filterBooking, searchBooking } from "../asyncThunk";
// import type { RootState } from '../../app/store'
// import { IBookings } from "../interfaces";

export{}

// interface InitState {
//   error: any,
//   status: string,
//   booking: string,
//   data: IBookings[],
//   filter: IBookings[]
// }

// const initialState: InitState = {
//   error: null,
//   status: "idle",
//   booking: "",
//   data: [],
//   filter: []
// }

// export const BookingsSlice = createSlice({
//     name: "bookings",
//     initialState,
//       reducers: {
//         setBooking: (state, action) => {
//             state.booking = action.payload;
//         }
//       },

//       extraReducers: (builder) => {
//         builder.addCase(fetchBookings.fulfilled, (state, action) => {
//           state.status = "fulfilled";
//           state.data = action.payload;
//         })
//       .addCase(fetchBookings.rejected, (state, action) => {
//           state.status = "failed";
//           state.error = action.payload;
//         })
//       .addCase(fetchBookings.pending, (state, action) => {
//           state.status = "pending";
//         })

//       .addCase(addBooking.fulfilled, (state, action) => {
//           state.data = [action.payload, ...state.data];
          
//         })
//       .addCase(addBooking.rejected, (state, action) => {
//           state.error = action.payload;
//         })
//       .addCase(addBooking.pending, (state, action) => {
//           state.status = "pending";          })

//       .addCase(deleteBooking.fulfilled, (state, action) => {
//           state.data = state.data.filter((element) => element.id !==  action.payload.id);

//         })
//       .addCase(deleteBooking.rejected, (state, action) => {
//           state.error = action.payload;
//         })
//       .addCase(deleteBooking.pending, (state, action) => {
//           state.status = "pending";
//         })

//       .addCase(filterBooking.fulfilled, (state, action) => {
//         state.data = state.data.filter((element) => element.status ==  action.payload);
//       })
//       .addCase(searchBooking.fulfilled, (state, action) => {
//         state.data = state.data.filter((element) => element.guest ==  action.payload);
//       })
//     }
// });

// export const {setBooking} = BookingsSlice.actions;

// export const getBookingsStatus = (state: RootState) => state.bookings.status;
// export const getBookingsData = (state: RootState) => state.bookings.data;
// export const getBookingsError = (state: RootState) => state.bookings.error;