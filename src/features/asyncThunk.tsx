import { createAsyncThunk } from '@reduxjs/toolkit';
import {  IRooms, IUsers, IBookings, IContacts } from './interfaces'


 function delay(data: any, time = 200) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}

//ROOMS
export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async (data: IRooms[]) => {
    return await delay(data);
});

export const addRoom= createAsyncThunk('rooms/addRoom', async (roomObj?: IRooms) => {
    return await delay(roomObj);
});

export const deleteRoom= createAsyncThunk('rooms/deleteRoom', async (roomObj?: IRooms) => {
    return await delay(roomObj);
});

//USERS
export const fetchUsers= createAsyncThunk('users/fetchUsers', async (data: IUsers[]) => {
    return await delay(data);
});

export const addUser= createAsyncThunk('users/addUser', async (userObj?: IUsers) => {
    return await delay(userObj);
});

export const deleteUser= createAsyncThunk('users/deleteUser', async (userObj?: IUsers) => {
    return await delay(userObj);
});

export const editUser= createAsyncThunk('users/editUser', async (userObj?: IUsers) => {
    return await delay(userObj);
});

//BOOKINGS
export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async (data: IBookings[]) => {
    console.log(data)
    return await delay(data);
});

export const addBooking= createAsyncThunk('bookings/addBooking', async (bookingObj?: IBookings) => {
    return await delay(bookingObj);
});

export const deleteBooking= createAsyncThunk('bookings/deleteBooking', async (bookingObj?: IBookings) => {
    return await delay(bookingObj);
});

//CONTACT
export const fetchContact = createAsyncThunk('contact/fetchContact', async (data: IContacts[]) => {
    return await delay(data);
});

export const addContact= createAsyncThunk('contact/addContact', async (contactObj?: IContacts) => {
    return await delay(contactObj);
});

export const deleteContact= createAsyncThunk('contact/deleteContact', async (contactObj?: IContacts) => {
    return await delay(contactObj);
});