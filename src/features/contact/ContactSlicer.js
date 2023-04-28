import { createSlice} from "@reduxjs/toolkit"
import { fetchContact, addContact, deleteContact } from "../asyncThunk";

export const RoomsSlice = createSlice({
    name: "rooms",
    initialState: {
        error: null,
        status: "idle",
        contact: "",
        data: []
      },

      reducers: {
        setContact: (state, action) => {
            state.room = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = (action.payload);
          })
        .addCase(fetchContact.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchContact.pending, (state, action) => {
            state.status = "loading";
          })

          .addCase(addContact.fulfilled, (state, action) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addContact.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(addContact.pending, (state, action) => {
            state.status = "pending";          })

        .addCase(deleteContact.fulfilled, (state, action) => {
            state.data = state.data.filter((user) => user.id !==  action.payload.id);

          })
        .addCase(deleteContact.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteContact.pending, (state, action) => {
            state.status = "pending";
          })
      },

});

export const {setContact} = RoomsSlice.actions;

export const getRoomsStatus = (state) => state.contact.status;
export const getRoomsData = (state) => state.contact.data;