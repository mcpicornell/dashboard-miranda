import { createSlice} from "@reduxjs/toolkit"
import type { RootState } from '../../app/store'
import { IUsers } from "../interfaces";
import { fetchUsers, editUser, deleteUser, addUser } from "./fetchUsers";

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
          state.data = state.data.filter((element) => element._id !==  action.payload);
          
          })
        .addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteUser.pending, (state, action) => {
          state.status = "pending";
          })
        .addCase(editUser.fulfilled, (state, action) => {
          state.data = state.data.filter((user) => user._id !==  action.payload._id);
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