import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchUsers, addUser, deleteUser, editUser } from "../asyncThunk";
import type { RootState } from '../../app/store'
import { IUsers } from "../interfaces";

interface InitState {
  error: any,
  status: string,
  data: IUsers[],
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
}

export const UsersSlice = createSlice({
    name: "users",
    initialState,

      reducers: {},

      extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
          })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = "pending";
          })

        .addCase(addUser.fulfilled, (state, action) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(addUser.pending, (state, action) => {
          state.status = "pending";
        })

        .addCase(deleteUser.fulfilled, (state, action) => {
          state.data = state.data.filter((user) => user.id !==  action.payload.id);

          })
        .addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteUser.pending, (state, action) => {
          state.status = "pending";
          })

        .addCase(editUser.fulfilled, (state, action) => {
          state.data = state.data.filter((user) => user.id !==  action.payload.id);
          state.data.push(action.payload);
          })
        .addCase(editUser.rejected, (state, action) => {
          state.error = action.payload;
          })
        .addCase(editUser.pending, (state, action) => {
          state.status = "pending";
          })
      },

});

export const getUsersStatus = (state:RootState) => state.users.status;
export const getUsersData = (state:RootState) => state.users.data;
export const getUsersError = (state:RootState) => state.users.error;