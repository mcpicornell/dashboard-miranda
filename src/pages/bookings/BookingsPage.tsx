import { useEffect, useState } from "react";
import { fetchBookings, fetchRooms } from "../../features/asyncThunk";
import { getBookingsData, getBookingsError, getBookingsStatus } from "../../features/bookings/BookingsSlice";
import { getRoomsStatus } from "../../features/rooms/RoomsSlice";
import bookingsJSON from'../../data/bookings.json';
import { Table } from "../../components/Table";
import { useAppSelector, useAppDispatch } from "../../app/store";
import { IBookingsTitles } from "../../features/interfaces";


const BookingsPage = () =>{
    const dispatch  = useAppDispatch();
    const bookingsStatus = useAppSelector(getBookingsStatus);
    const bookingsData = useAppSelector(getBookingsData);
    const bookingsError = useAppSelector(getBookingsError);
    const roomsStatus = useAppSelector(getRoomsStatus);

    useEffect(() => {
        if (bookingsStatus == "idle") {
         dispatch(fetchBookings());
        }
        
     }, [bookingsStatus, dispatch, bookingsData]);

     const bookingsTitles: IBookingsTitles = {
        guestName: "Guest",
        orderDate: "Order Date",
        checkIn: "Check In",
        checkOut: "Check Out",
        specialRequest: "Special Request",
        roomType: "Room Type",
        status: "Status"
     }

     
     const bookingsDataCopy = [...bookingsData]
    return (
        <>
            <Table  bookingsData={bookingsDataCopy} bookingsTitles={bookingsTitles} />
        </>
    )
};

export default BookingsPage;

