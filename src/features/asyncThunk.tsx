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

export const filterRoom = createAsyncThunk<string, string>('rooms/filterRoom', async (status) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(status)
        }, 200)
    })
});

//USERS
export const fetchUsers = createAsyncThunk<IUsers[], void>('users/fetchUsers', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(usersJSON)
        }, 200)
    })
});

export const addUser = createAsyncThunk<IUsers, IUsers>('users/addUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});

export const deleteUser = createAsyncThunk<IUsers, IUsers>('users/deleteUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});

export const editUser = createAsyncThunk<IUsers, IUsers>('users/editUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});

export const filterUser = createAsyncThunk<string, string>('users/filterUser', async (status) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(status)
        }, 200)
    })
});

export const searchUser = createAsyncThunk<string, string>('users/searchUser', async (userName) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userName)
        }, 200)
    })
});


//BOOKINGS
export const fetchBookings = createAsyncThunk<IBookings[], void>('bookings/fetchBookings', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(bookingsJSON)
        }, 200)
    })
});

export const addBooking = createAsyncThunk<IBookings, IBookings>('bookings/addBooking', async (bookingObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(bookingObj)
        }, 200)
    })
});


export const deleteBooking = createAsyncThunk<IBookings, IBookings>('bookings/deleteBooking', async (bookingObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(bookingObj)
        }, 200)
    })
});

export const filterBooking = createAsyncThunk<string, string>('bookings/filterBooking', async (status) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(status)
        }, 200)
    })
});

export const searchBooking = createAsyncThunk<string, string>('bookings/searchBooking', async (guestName) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(guestName)
        }, 200)
    })
});

//CONTACT

export const fetchContact = createAsyncThunk<IContacts[], void>('contacts/fetchContact', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(contactsJSON)
        }, 200)
    })
});



export const addContact = createAsyncThunk<IContacts, IContacts>('contacts/addContact', async (contactObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(contactObj)
        }, 200)
    })
});

export const deleteContact = createAsyncThunk<IContacts, IContacts>('contacts/deleteContact', async (contactObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(contactObj)
        }, 200)
    })
});