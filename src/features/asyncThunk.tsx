import { createAsyncThunk } from '@reduxjs/toolkit';

interface IRooms{
    rooms: [],
    roomObj: {}
}

interface IUsers {}

interface IBooking {}

interface IContact {}

export function delay(data: any, time = 200) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}

//ROOMS
export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async (data) => {
    return await delay(data);
});

export const addRoom= createAsyncThunk('rooms/addRoom', async (roomObj) => {
    return await delay(roomObj);
});

export const deleteRoom= createAsyncThunk('rooms/deleteRoom', async (roomObj) => {
    return await delay(roomObj);
});

//USERS
export const fetchUsers= createAsyncThunk('users/fetchUsers', async (data) => {
    return await delay(data);
});

export const addUser= createAsyncThunk('users/addUser', async (userObj) => {
    return await delay(userObj);
});

export const deleteUser= createAsyncThunk('users/deleteUser', async (userObj) => {
    return await delay(userObj);
});

export const editUser= createAsyncThunk('users/editUser', async (userObj) => {
    return await delay(userObj);
});

//BOOKINGS
export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async (data) => {
    return await delay(data);
});

export const addBooking= createAsyncThunk('bookings/addBooking', async (bookingObj) => {
    return await delay(bookingObj);
});

export const deleteBooking= createAsyncThunk('bookings/deleteBooking', async (bookingObj) => {
    return await delay(bookingObj);
});

//CONTACT
export const fetchContact = createAsyncThunk('contact/fetchContact', async (data) => {
    return await delay(data);
});

export const addContact= createAsyncThunk('contact/addContact', async (contactObj) => {
    return await delay(contactObj);
});

export const deleteContact= createAsyncThunk('contact/deleteContact', async (contactObj) => {
    return await delay(contactObj);
});