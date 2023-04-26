import { configureStore } from "@reduxjs/toolkit";
import { RoomsSlice } from "../features/rooms/RoomsSlice";
import { UsersSlice } from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    rooms: RoomsSlice.reducer,
    users: UsersSlice.reducer
  },
});