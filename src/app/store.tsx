import { configureStore } from "@reduxjs/toolkit";
import { RoomsSlice } from "../features/rooms/RoomsSlice";
import { BookingsSlice } from "../features/bookings/BookingsSlice";
import { UsersSlice } from "../features/users/UsersSlice";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
// import { ContactSlice } from "../features/contact/ContactSlicer";


export const store = configureStore({
  reducer: {
    rooms: RoomsSlice.reducer,
    bookings: BookingsSlice.reducer,
    users: UsersSlice.reducer,
    // contacts: ContactSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;