import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBookings } from '../interfaces';
import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';
import {fetchApi, getApi} from '../fetchApi'

const urlBookings = "http://localhost:3001/api/bookings"
 

export const fetchBookings = createAsyncThunk<IBookings[]>('bookings/fetchBookings', async () => {
    try{
    const response = await getApi(urlBookings);
    return response.data.bookings;
    }
    catch(error){
        console.error('Error to get bookings:', error);
        throw error;
    }
});

export const addBooking = createAsyncThunk<IBookings, IBookings>('bookings/addBooking', async (bookingObj: IBookings) => {
    try{
        const response = await fetchApi(bookingObj, "POST", urlBookings)
        return response.data.roomPosted
    }
    catch(error){
        console.error('Error to add bookings:', error);
        throw error;
    }
});

export const deleteBooking = createAsyncThunk<string, string>('bookings/deleteBooking', async (roomId) => {
    try {
      await fetchApi(roomId, "DELETE", `${urlBookings}/${roomId}`);
      return roomId;
    } catch (error) {
      console.error('Error to delete booking:', error);
      throw error;
    }
  });

export const editBooking = createAsyncThunk<IBookings, IBookings>('bookings/editBooking', async (bookingObj) => {
    try{
        const response = await fetchApi(bookingObj, "PUT", `${urlBookings}/${bookingObj._id}`)
        return response.data.booking
    }
    catch(error){
        console.error('Error to update booking:', error);
        throw error;
    }
});
