import { createAsyncThunk } from '@reduxjs/toolkit';
import {  IRooms, IUsers, IBookings, IContacts } from './interfaces'
import roomsJSON from '../data/rooms.json'
import bookingsJSON from '../data/bookings.json'
import usersJSON from '../data/users.json'
import contactsJSON from '../data/contacts.json'

//  function delay(data: any, time = 200) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data);
//         }, time);
//     });
// }

//ROOMS

export const fetchRooms = createAsyncThunk<IRooms[], void>('rooms/fetchRooms', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(roomsJSON)
        }, 200)
    })
});

export const getRoom = createAsyncThunk<IRooms, IRooms>('rooms/addRoom', async (roomObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(roomObj)
        }, 200)
    })
});

export const addRoom = createAsyncThunk<IRooms, IRooms>('rooms/addRoom', async (roomObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(roomObj)
        }, 200)
    })
});

export const deleteRoom = createAsyncThunk<IRooms, IRooms>('rooms/deleteRoom', async (roomObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(roomObj)
        }, 200)
    })
});

//USERS
export const fetchUsers = createAsyncThunk<IUsers[], void>('rooms/fetchUsers', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(usersJSON)
        }, 200)
    })
});

export const addUser = createAsyncThunk<IUsers, IUsers>('rooms/addUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});

export const deleteUser = createAsyncThunk<IUsers, IUsers>('rooms/deleteUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});

export const editUser = createAsyncThunk<IUsers, IUsers>('rooms/editUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});


//BOOKINGS
export const fetchBookings = createAsyncThunk<IBookings[], void>('rooms/fetchBookings', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(bookingsJSON)
        }, 200)
    })
});

export const addBooking = createAsyncThunk<IBookings, IBookings>('rooms/addBooking', async (bookingObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(bookingObj)
        }, 200)
    })
});


export const deleteBooking = createAsyncThunk<IBookings, IBookings>('rooms/deleteBooking', async (bookingObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(bookingObj)
        }, 200)
    })
});

//CONTACT

export const fetchContact = createAsyncThunk<IContacts[], void>('rooms/fetchContact', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(contactsJSON)
        }, 200)
    })
});



export const addContact = createAsyncThunk<IContacts, IContacts>('rooms/addContact', async (contactObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(contactObj)
        }, 200)
    })
});

export const deleteContact = createAsyncThunk<IContacts, IContacts>('rooms/deleteContact', async (contactObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(contactObj)
        }, 200)
    })
});