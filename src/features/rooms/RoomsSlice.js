import { createSlice} from "@reduxjs/toolkit"
import { fetchRooms, addRoom, deleteRoom } from "../asyncThunk";

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

          .addCase(addRoom.fulfilled, (state, action) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addRoom.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(addRoom.pending, (state, action) => {
            state.status = "pending";          
          })

        .addCase(deleteRoom.fulfilled, (state, action) => {
            state.data = state.data.filter((user) => user.id !==  action.payload.id);

          })
        .addCase(deleteRoom.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteRoom.pending, (state, action) => {
            state.status = "pending";
          })
      },

});

export const {setRooms} = RoomsSlice.actions;

export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsData = (state) => state.rooms.data;
export const getRoomsError = (state) => state.rooms.error;