import { useEffect } from "react";
import { fetchBookings } from "../../features/asyncThunk";
import { getBookingsData, getBookingsError, getBookingsStatus } from "../../features/bookings/BookingsSlice";
import bookingsJSON from'../../data/bookings.json';
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../components/Table";

const BookingsPage = () =>{
    const dispatch  = useDispatch();
    const bookingsStatus = useSelector(getBookingsStatus);
    const bookingsData = useSelector(getBookingsData);
    const bookingsError = useSelector(getBookingsError);

    useEffect(() => {
        if (bookingsStatus == "idle") {
         dispatch(fetchBookings(bookingsJSON));
        
        }
     }, [bookingsStatus], dispatch);

     const bookingsTitles = {
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

