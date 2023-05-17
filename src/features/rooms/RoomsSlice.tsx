import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchRooms, addRoom, deleteRoom } from "../asyncThunk";
import type { RootState } from '../../app/store'
import { IRooms } from "../interfaces";

export const RoomsSlice = createSlice({
    name: "rooms",
    initialState: {
        error: null,
        status: "idle",
        room: "",
        data: [] as IRooms[]
      },

      reducers: {
        setRooms: (state, action) => {
            state.room = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action: PayloadAction<any | IRooms[]>) => {
            state.status = "fulfilled";
            state.data = (action.payload);
            
          })
        .addCase(fetchRooms.rejected, (state, action: PayloadAction<any | IRooms[]>) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchRooms.pending, (state, action: PayloadAction<any | IRooms[]>) => {
            state.status = "loading";
          })

          .addCase(addRoom.fulfilled, (state, action: PayloadAction<any | IRooms>) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addRoom.rejected, (state, action: PayloadAction<any | IRooms>) => {
            state.error = action.payload;
          })
        .addCase(addRoom.pending, (state, action: PayloadAction<any | IRooms>) => {
            state.status = "pending";          
          })

        .addCase(deleteRoom.fulfilled, (state, action: PayloadAction<any | IRooms>) => {
            state.data = state.data.filter((element) => element.id !==  action.payload.id);

          })
        .addCase(deleteRoom.rejected, (state, action: PayloadAction<any | IRooms>) => {
            state.error = action.payload;
          })
        .addCase(deleteRoom.pending, (state, action: PayloadAction<any | IRooms>) => {
            state.status = "pending";
          })
      },

});

export const {setRooms} = RoomsSlice.actions;

export const getRoomsStatus = (state:RootState) => state.rooms.status;
export const getRoomsData = (state:RootState) => state.rooms.data;
export const getRoomsError = (state:RootState) => state.rooms.error;