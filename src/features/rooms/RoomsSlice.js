import { createSlice} from "@reduxjs/toolkit"
import { fetchRooms } from "../asyncThunk";

export const RoomsSlice = createSlice({
    name: "rooms",
    initialState: {
        error: null,
        status: "idle",
        room: "",
        data: []
      },

      reducers: {
        setRooms: (state, action) => {
            state.room = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = (action.payload);
          })
        .addCase(fetchRooms.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchRooms.pending, (state, action) => {
            state.status = "loading";
          })
      },

});

export const {setRooms} = RoomsSlice.actions;

export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsData = (state) => state.rooms.data;