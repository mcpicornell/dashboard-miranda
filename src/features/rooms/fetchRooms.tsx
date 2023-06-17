import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRooms } from "../interfaces";
import { fetchApi, getApi } from "../fetchApi";

const urlRooms = "http://localhost:3001/api/rooms";

export const fetchRooms = createAsyncThunk<IRooms[]>(
  "rooms/fetchRooms",
  async () => {
    try {
      const response = await getApi(urlRooms);
      return response.data.rooms;
    } catch (error) {
      console.error("Error to get rooms:", error);
      throw error;
    }
  }
);

export const addRoom = createAsyncThunk<IRooms, IRooms>(
  "rooms/addRoom",
  async (roomObj: IRooms) => {
    try {
      const response = await fetchApi(roomObj, "POST", urlRooms);
      console.log(response.data.userPosted);
      return response.data.roomPosted;
    } catch (error) {
      console.error("Error to add rooms:", error);
      throw error;
    }
  }
);

export const deleteRoom = createAsyncThunk<string, string>(
  "rooms/deleteRoom",
  async (roomId) => {
    try {
      await fetchApi(roomId, "DELETE", `${urlRooms}/${roomId}`);
      return roomId;
    } catch (error) {
      console.error("Error to delete room:", error);
      throw error;
    }
  }
);

export const editRoom = createAsyncThunk<IRooms, IRooms>(
  "rooms/editRoom",
  async (roomObj) => {
    try {
      const response = await fetchApi(
        roomObj,
        "PUT",
        `${urlRooms}/${roomObj._id}`
      );
      return response.data.room;
    } catch (error) {
      console.error("Error to update room:", error);
      throw error;
    }
  }
);
