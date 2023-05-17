import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchContact, addContact, deleteContact } from "../asyncThunk";
import type { RootState } from '../../app/store'
import { IContacts } from "../interfaces";

export const ContactSlice = createSlice({
    name: "contacts",
    initialState: {
        error: null,
        status: "idle",
        contact: "",
        data: [] as IContacts[]
      },

      reducers: {
        setContact: (state, action) => {
            state.contact = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchContact.fulfilled, (state, action: PayloadAction<any | IContacts[]>) => {
            state.status = "fulfilled";
            state.data = (action.payload);
          })
        .addCase(fetchContact.rejected, (state, action: PayloadAction<any | IContacts[]>) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchContact.pending, (state, action: PayloadAction<any | IContacts[]>) => {
            state.status = "loading";
          })

          .addCase(addContact.fulfilled, (state, action: PayloadAction<any | IContacts>) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addContact.rejected, (state, action: PayloadAction<any | IContacts>) => {
            state.error = action.payload;
          })
        .addCase(addContact.pending, (state, action: PayloadAction<any | IContacts>) => {
            state.status = "pending";          })

        .addCase(deleteContact.fulfilled, (state, action: PayloadAction<any | IContacts>) => {
            state.data = state.data.filter((element: IContacts) => element.id !==  action.payload.id);

          })
        .addCase(deleteContact.rejected, (state, action: PayloadAction<any | IContacts>) => {
            state.error = action.payload;
          })
        .addCase(deleteContact.pending, (state, action: PayloadAction<any | IContacts>) => {
            state.status = "pending";
          })
      },

});

export const {setContact} = ContactSlice.actions;

export const getContactsStatus = (state:RootState) => state.contacts.status;
export const getContactsData = (state:RootState) => state.contacts.data;