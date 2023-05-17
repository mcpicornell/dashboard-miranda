import { JSXElementConstructor, ReactComponentElement, useEffect } from "react";
import { fetchBookings } from "../../features/asyncThunk";
import { getBookingsData, getBookingsError, getBookingsStatus } from "../../features/bookings/BookingsSlice";
import bookingsJSON from'../../data/bookings.json';
import { Table } from "../../components/Table";
import { useAppSelector, useAppDispatch } from "../../app/store";
import { IBookingsTitles } from "../../features/interfaces";


const BookingsPage = () =>{
    const dispatch  = useAppDispatch();
    const bookingsStatus = useAppSelector(getBookingsStatus);
    const bookingsData = useAppSelector(getBookingsData);
    const bookingsError = useAppSelector(getBookingsError);

    useEffect(() => {
        if (bookingsStatus == "idle") {
         dispatch(fetchBookings(bookingsJSON));
        }
     }, [bookingsStatus]);

     const bookingsTitles: IBookingsTitles = {
        guestName: "Guest",
        orderDate: "Order Date",
        checkIn: "Check In",
        checkOut: "Check Out",
        specialRequest: "Special Request",
        roomType: "Room Type",
        status: "Status"
     }

    return (
        <>
            <Table  bookingsData={bookingsData} bookingsTitles={bookingsTitles} />
        </>
    )
};

export default BookingsPage;

