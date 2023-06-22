import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContacts } from "../interfaces";
import { fetchApi, getApi } from "../fetchApi";

const urlContacts = "http://localhost:3001/api/contacts";

export const fetchContacts = createAsyncThunk<IContacts[]>(
  "contacts/fetchContacts",
  async () => {
    try {
      const response = await getApi(urlContacts);
      console.log(response)
      return response.data.contacts;
    } catch (error) {
      console.error("Error to get contacts:", error);
      throw error;
    }
  }
);

export const addContact = createAsyncThunk<IContacts, IContacts>(
  "contacts/addContact",
  async (contactObj: IContacts) => {
    try {
      const response = await fetchApi(contactObj, "POST", urlContacts);
      return response.data.contact;
    } catch (error) {
      console.error("Error to add contacts:", error);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk<string, string>(
  "contacts/deleteContact",
  async (contactId) => {
    try {
      await fetchApi(contactId, "DELETE", `${urlContacts}/${contactId}`);
      return contactId;
    } catch (error) {
      console.error("Error to delete contact:", error);
      throw error;
    }
  }
);

export const editContact = createAsyncThunk<IContacts, IContacts>(
  "contacts/editContact",
  async (contactObj) => {
    try {
      const response = await fetchApi(
        contactObj,
        "PUT",
        `${urlContacts}/${contactObj._id}`
      );
      return response.data.contact;
    } catch (error) {
      console.error("Error to update contact:", error);
      throw error;
    }
  }
);
