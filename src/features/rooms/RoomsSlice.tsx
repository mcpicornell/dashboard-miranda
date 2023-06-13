import { createSlice} from "@reduxjs/toolkit"
import { fetchRooms, addRoom, deleteRoom, getRoomById } from "./fetchRooms";
import type { RootState } from '../../app/store'
import { IRooms } from "../interfaces";

interface InitState {
  error: any,
  status: string,
  room?: IRooms,
  data: IRooms[]
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
  room: {} as IRooms
}

export const RoomsSlice = createSlice({
    name: "rooms",
    initialState,

      reducers:{},

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
          .addCase(getRoomById.fulfilled, (state, action) => {
            state.room = action.payload;
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
            state.data = state.data.filter((element) => element._id !==  action.payload);
          })
        .addCase(deleteRoom.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteRoom.pending, (state, action) => {
            state.status = "pending";
          })
        
      },

});

export const getRoomsStatus = (state:RootState) => state.rooms.status;
export const getRoomsData = (state:RootState) => state.rooms.data;
export const getRoomsError = (state:RootState) => state.rooms.error;
export const getRoomObj = (state:RootState) => state.rooms.room;