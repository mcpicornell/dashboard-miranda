import { createAsyncThunk } from '@reduxjs/toolkit';

export function delay(data, time = 200) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}

//ROOMS

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async (roomsJSON) => {
    return await delay(roomsJSON);
});

//USERS

export const fetchUsers= createAsyncThunk('users/fetchUsers', async (usersJSON) => {
    return await delay(usersJSON);
});

export const addUser= createAsyncThunk('users/addUser', async (user) => {
    return await delay(user);
});

export const deleteUser= createAsyncThunk('users/deleteUser', async (user) => {
    return await delay(user);
});

//BOOKINGS
export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async (bookingsJSON) => {
    return await delay(bookingsJSON);
});

export const addBooking= createAsyncThunk('bookings/addBooking', async (booking) => {
    return await delay(booking);
});

export const deleteBooking= createAsyncThunk('bookings/deleteBooking', async (booking) => {
    return await delay(booking);
});