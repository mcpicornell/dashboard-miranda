import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsers } from '../interfaces';
import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';
import {fetchApi} from '../fetchApi'

const urlUsers = "http://localhost:3001/api/users"
const url = process.env.REACT_APP_API_URL


//USERS

  export const postLogin = async (body: any) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      } else {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };


export const fetchUsers = createAsyncThunk<IUsers[]>('users/fetchUsers', async () => {
    try{
        const response = await fetch(urlUsers);
    const data = await response.json();
    console.log(process.env.REACT_APP_API_URL)
    return data.data.users;
    }
    catch(error){
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
});

export const getOneUser = createAsyncThunk<IUsers>('users/getOneUser', async (userId) => {
    try{
        const response = await fetch(urlUsers);
        const data = await response.json();
        return data.data.users;
    }
    catch(error){
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
});

export const addUser = createAsyncThunk<IUsers, IUsers>('users/addUser', async (userObj: IUsers) => {
    try{
        const response = await fetchApi(userObj, "POST", urlUsers)
        console.log(response.data.userPosted)
        return response.data.userPosted
    }
    catch(error){
        console.error('Error al crear el usuario:', error);
        throw error;
    }
});

export const deleteUser = createAsyncThunk<string, string>('users/deleteUser', async (userId) => {
    try {
      await fetchApi(userId, "DELETE", `${urlUsers}/${userId}`);
      return userId;
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  });

export const editUser = createAsyncThunk<IUsers, IUsers>('users/editUser', async (userObj) => {
    try{
        const response = await fetchApi(userObj, "PUT", `${urlUsers}/${userObj._id}`)
        return response.data.user
    }
    catch(error){
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
});
