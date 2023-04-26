import { createSlice} from "@reduxjs/toolkit"
import { fetchUsers, addUser, deleteUser } from "../asyncThunk";

export const UsersSlice = createSlice({
    name: "users",
    initialState: {
        error: null,
        status: "idle",
        user: "",
        data: []
      },

      reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
      },

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
            state.status = "loading";
          })

        .addCase(addUser.fulfilled, (state, action) => {
            state.data = [action.payload, ...state.data];
            
          })
        .addCase(addUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(addUser.pending, (state, action) => {
            //GESTIONAR
          })

        .addCase(deleteUser.fulfilled, (state, action) => {
          state.data = state.data.filter((user) => user.id !==  action.payload.id);

          })
        .addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;
          })
        .addCase(deleteUser.pending, (state, action) => {
            //GESTIONAR

          })
      },

});

export const {setUser} = UsersSlice.actions;

export const getUsersStatus = (state) => state.users.status;
export const getUsersData = (state) => state.users.data;
export const getUsersError = (state) => state.users.error;