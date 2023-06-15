import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store';
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

let fetchUsersToastShownFullfilled = false; 
let fetchUsersToastShownPending = false; 
let fetchUsersToastShownError = false;
let addUserToastShownFullfilled = false; 
let addUserToastShownPending = false; 
let addUserToastShownError = false;
let deleteUserToastShownFullfilled = false; 
let deleteUserToastShownPending = false; 
let deleteUserToastShownError = false;
let editUserToastShownFullfilled = false; 
let editUserToastShownPending = false; 
let editUserToastShownError = false;


export const UsersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'pending';
        if (!fetchUsersToastShownPending) {
          showToast('Fetching users...', 'pending');
          fetchUsersToastShownPending = true; 
        }
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        
        if (!fetchUsersToastShownFullfilled) {
          showToast('Users fetched successfully!', 'success');
          fetchUsersToastShownFullfilled = true; 
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        if (!fetchUsersToastShownError) {
          showToast('Failed to fetch users', 'error');
          fetchUsersToastShownError = true; 
        }
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        if (!addUserToastShownFullfilled) {
          showToast('User added successfully!', 'success');
          addUserToastShownFullfilled = true; 
        }
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
        if (!addUserToastShownError) {
          showToast('Failed to add user', 'error');
          addUserToastShownError = true; 
        }
      })
      .addCase(addUser.pending, (state, action) => {
        state.status = 'pending';
        if (!addUserToastShownPending) {
          showToast('Adding user...', 'pending');
          addUserToastShownPending = true; 
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter((element) => element._id !== action.payload);
        if (!deleteUserToastShownFullfilled) {
          showToast('User deleted successfully!', 'success');
          deleteUserToastShownFullfilled = true; 
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        if (!deleteUserToastShownError) {
          showToast('Failed to delete user', 'error');
          deleteUserToastShownError = true; 
        }
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.status = 'pending';
        if (!deleteUserToastShownPending) {
          showToast('Deleting user...', 'pending');
          deleteUserToastShownPending = true; 
        }
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user._id !== action.payload._id);
        state.data.push(action.payload);
        if (!editUserToastShownFullfilled) {
          showToast('User edited successfully!', 'success');
          editUserToastShownFullfilled = true; 
        }
      })
      .addCase(editUser.rejected, (state, action) => {
        state.error = action.payload;
        if (!editUserToastShownError) {
          showToast('Failed to edit user', 'error');
          editUserToastShownError = true; 
        }
      })
      .addCase(editUser.pending, (state, action) => {
        state.status = "pending";
        if (!editUserToastShownPending) {
          showToast('Editing user...', 'pending');
          editUserToastShownPending = true; 
        }
      });

  },
});

export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersData = (state: RootState) => state.users.data;
export const getUsersError = (state: RootState) => state.users.error;