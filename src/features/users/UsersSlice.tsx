import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import {  addUser, editUser, filterUser, searchUser } from "../asyncThunk";
import type { RootState } from '../../app/store'
import { IUsers } from "../interfaces";
import { fetchUsers, getOneUser, deleteUser } from "./apiCallUsers";

interface InitState {
  error: any,
  status: string,
  data: IUsers[],
  userId: string
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
  userId: "",
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
        //   .addCase(getOneUser.fulfilled, (state, action) => {
        //     state.status = "fulfilled";
        //     state.data = action.payload;
        //   })

        // .addCase(addUser.fulfilled, (state, action) => {
        //     state.data = action.payload;
            
        //   })
        .addCase(addUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(addUser.pending, (state, action) => {
          state.status = "pending";
        })

        .addCase(deleteUser.fulfilled, (state, action) => {
          state.data = state.data.filter((element) => element._id !==  Number(action.payload));
          })
        .addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteUser.pending, (state, action) => {
          state.status = "pending";
          })
        // .addCase(editUser.fulfilled, (state, action) => {
        //   state.data = state.data.filter((user) => user.id !==  action.payload.id);
        //   state.data.push(action.payload);
        //   })
        .addCase(editUser.rejected, (state, action) => {
          state.error = action.payload;
          })
        .addCase(editUser.pending, (state, action) => {
          state.status = "pending";
          })
        // .addCase(filterUser.fulfilled, (state, action) => {
        //   state.data = state.data.filter((element) => String(element.isActive) ===  action.payload);
        // })
        // .addCase(searchUser.fulfilled, (state, action) => {
        //   state.data = state.data.filter((element) => {
        //     const name = element.name.toLocaleLowerCase();
        //     return name.match(action.payload)
        //   })
          
        // })
      },

});

export const getUsersStatus = (state:RootState) => state.users.status;
export const getUsersData = (state:RootState) => state.users.data;
export const getUsersError = (state:RootState) => state.users.error;