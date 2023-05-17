import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchUsers, addUser, deleteUser, editUser } from "../asyncThunk";
import type { RootState } from '../../app/store'
import { IUsers } from "../interfaces";

export const UsersSlice = createSlice({
    name: "users",
    initialState: {
        error: null,
        status: "idle",
        user: "",
        data: [] as IUsers[]
      },

      reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
      },

      extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any | IUsers[]>) => {
            state.status = "fulfilled";
            state.data = action.payload;
          })
        .addCase(fetchUsers.rejected, (state, action: PayloadAction<any | IUsers[]>) => {
            state.status = "failed";
            state.error = action.payload;
          })
        .addCase(fetchUsers.pending, (state, action: PayloadAction<any | IUsers[]>) => {
            state.status = "pending";
          })

        .addCase(addUser.fulfilled, (state, action: PayloadAction<any | IUsers>) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addUser.rejected, (state, action: PayloadAction<any | IUsers>) => {
            state.error = action.payload;
          })
        .addCase(addUser.pending, (state, action: PayloadAction<any | IUsers>) => {
          state.status = "pending";
        })

        .addCase(deleteUser.fulfilled, (state, action: PayloadAction<any | IUsers>) => {
          state.data = state.data.filter((user) => user.id !==  action.payload.id);

          })
        .addCase(deleteUser.rejected, (state, action: PayloadAction<any | IUsers>) => {
            state.error = action.payload;
          })
        .addCase(deleteUser.pending, (state, action: PayloadAction<any | IUsers>) => {
          state.status = "pending";
          })

        .addCase(editUser.fulfilled, (state, action: PayloadAction<any | IUsers>) => {
          state.data = state.data.filter((user: IUsers) => user.id !==  action.payload.id);
          state.data.push(action.payload);
          })
        .addCase(editUser.rejected, (state, action: PayloadAction<any | IUsers>) => {
          state.error = action.payload;
          })
        .addCase(editUser.pending, (state, action: PayloadAction<any | IUsers>) => {
          state.status = "pending";
          })
      },

});

export const {setUser} = UsersSlice.actions;

export const getUsersStatus = (state:RootState) => state.users.status;
export const getUsersData = (state:RootState) => state.users.data;
export const getUsersError = (state:RootState) => state.users.error;