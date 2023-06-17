import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IUsers } from "../interfaces";
import { fetchUsers, editUser, deleteUser, addUser } from "./fetchUsers";
import { showToast } from "../functions";

interface InitState {
  error: any;
  status: string;
  data: IUsers[];
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "pending";
        showToast("Fetching users...", "pending");
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Failed to fetch users", "error");
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        showToast("User added successfully!", "success");
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
        showToast("Failed to add user", "error");
      })
      .addCase(addUser.pending, (state, action) => {
        state.status = "pending";
        showToast("Adding user...", "pending");
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element._id !== action.payload
        );
        showToast("User deleted successfully!", "success");
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        showToast("Failed to delete user", "error");
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.status = "pending";
        showToast("Deleting user...", "pending");
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (user) => user._id !== action.payload._id
        );
        state.data.push(action.payload);
        showToast("User edited successfully!", "success");
      })
      .addCase(editUser.rejected, (state, action) => {
        state.error = action.payload;
        showToast("Failed to edit user", "error");
      })
      .addCase(editUser.pending, (state, action) => {
        state.status = "pending";
        showToast("Editing user...", "pending");
      });
  },
});

export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersData = (state: RootState) => state.users.data;
export const getUsersError = (state: RootState) => state.users.error;
