import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "../contact/fetchContacts";
import type { RootState } from '../../app/store'
import { IContacts } from "../interfaces";
import { showToast } from "../functions";

interface InitState {
    error: any;
    status: string;
    data: IContacts[];
  }
  
  const initialState: InitState = {
    error: null,
    status: "idle",
    data: [],
  };
  
  export const ContactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.data = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
  
          showToast("Failed to fetch contacts", "error");
        })
        .addCase(fetchContacts.pending, (state, action) => {
          state.status = "pending";
  
          showToast("Fetching contacts...", "pending");
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.data = [action.payload, ...state.data];
  
          showToast("Contact added successfully!", "success");
        })
        .addCase(addContact.rejected, (state, action) => {
          state.error = action.payload;
  
          showToast("Failed to add contact", "error");
        })
        .addCase(addContact.pending, (state, action) => {
          state.status = "pending";
  
          showToast("Adding contact...", "pending");
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.data = state.data.filter(
            (element) => element._id !== action.payload
          );
  
          showToast("Contact deleted successfully!", "success");
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.error = action.payload;
  
          showToast("Failed to delete contact", "error");
        })
        .addCase(deleteContact.pending, (state, action) => {
          state.status = "pending";
          showToast("Deleting contact...", "pending");
        });
    },
  });
  
  export const getContactsStatus = (state: RootState) => state.contacts.status;
  export const getContactsData = (state: RootState) => state.contacts.data;
  export const getContactsError = (state: RootState) => state.contacts.error;
  