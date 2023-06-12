import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsers } from '../interfaces';

const urlUsers = "http://localhost:3001/api/users"

//USERS

export const fetchApi = async (body: string | IUsers, method: string, url: string) => {
    try {
      const response = await fetch(url, {
        method: method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
       
      });
      console.log(body)
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      } else {
        return await response.json();
      }
    } catch (err) {
      console.error(err);
    }
  };


export const fetchUsers = createAsyncThunk<IUsers[]>('users/fetchUsers', async () => {
    try{
        const response = await fetch(urlUsers);
    const data = await response.json();
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



// export const addUser = createAsyncThunk<IUsers>('users/addUser', async (userObj) => {
//     try{
//         const response = await fetchApi(userObj, "POST", urlUsers)
//         console.log(response)
//         return response
//     }
//     catch(error){
//         console.error('Error al crear el usuario:', error);
//         throw error;
//     }
// });

export const deleteUser = createAsyncThunk<string, string>('users/deleteUser', async (userId) => {
    try {
      await fetchApi(userId, "DELETE", `${urlUsers}/${userId}`);
      return userId;
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  });

// export const editUser = createAsyncThunk('users/editUser', async (userObj, id) => {
//     try{
//         const response = await fetchApi(userObj, "PUT", `${urlUsers}/${id}`)
//         return response
//     }
//     catch(error){
//         console.error('Error al eliminar el usuario:', error);
//         throw error;
//     }
// });


// export const editUser = createAsyncThunk<IUsers, IUsers>('users/editUser', async (userObj) => {
//     return await new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(userObj)
//         }, 200)
//     })
// });

// export const filterUser = createAsyncThunk<string, string>('users/filterUser', async (status) => {
//     return await new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(status)
//         }, 200)
//     })
// });

// export const searchUser = createAsyncThunk<string, string>('users/searchUser', async (userName) => {
//     return await new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(userName)
//         }, 200)
//     })
// });
