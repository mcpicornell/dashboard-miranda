import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUsers } from "../interfaces";
import "cross-fetch/polyfill";
import { fetchApi, getApi } from "../fetchApi";

const urlUsers = `https://g0mvg1qy2l.execute-api.eu-west-3.amazonaws.com/dev/api/users`;

export const getUserById = async (userId: string): Promise<IUsers> => {
  const response = await getApi(`${urlUsers}/${userId}`);
  return response.data.user;
};

export const fetchUsers = createAsyncThunk<IUsers[]>(
  "users/fetchUsers",
  async () => {
    try {
      const response = await getApi(urlUsers);
      return response.data.users;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      throw error;
    }
  }
);

export const addUser = createAsyncThunk<IUsers, IUsers>(
  "users/addUser",
  async (userObj: IUsers) => {
    try {
      const response = await fetchApi(userObj, "POST", urlUsers);
      return response.data.userPosted;
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw error;
    }
  }
);

export const deleteUser = createAsyncThunk<string, string>(
  "users/deleteUser",
  async (userId) => {
    try {
      await fetchApi(userId, "DELETE", `${urlUsers}/${userId}`);
      return userId;
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      throw error;
    }
  }
);

export const editUser = createAsyncThunk<IUsers, IUsers>(
  "users/editUser",
  async (userObj) => {
    try {
      const response = await fetchApi(
        userObj,
        "PUT",
        `${urlUsers}/${userObj._id}`
      );
      return response.data.user;
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      throw error;
    }
  }
);
