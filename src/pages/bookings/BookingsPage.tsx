import { useEffect, useState } from "react";
import { fetchBookings } from "../../features/bookings/fetchBookings";
import {
  getBookingsData,
  getBookingsStatus,
} from "../../features/bookings/BookingsSlice";
import { Table } from "../../components/Table";
import { useAppSelector, useAppDispatch } from "../../app/store";
import { IBookings, IBookingsTitles } from "../../features/interfaces";

const BookingsPage = () => {
  const dispatch = useAppDispatch();
  const bookingsStatus = useAppSelector(getBookingsStatus);
  const bookingsData = useAppSelector(getBookingsData);
  const [bookingArr, setBookingArr ] = useState<IBookings[]>();
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (bookingsStatus === "idle") {
      dispatch(fetchBookings());
    }
    else if(bookingsStatus === "fulfilled" && isFetched === false){
      setIsFetched(true);
      setBookingArr(bookingsData);
    }
  }, [bookingsStatus, dispatch, bookingsData, isFetched]);


  const bookingsTitles: IBookingsTitles = {
    guestName: "Guest",
    orderDate: "Order Date",
    checkIn: "Check In",
    checkOut: "Check Out",
    specialRequest: "Special Request",
    roomType: "Room Type",
    status: "Status",
  };

  const bookingsDataCopy = [...bookingsData];
  return (
    <>
      <Table bookingsData={bookingsDataCopy} bookingsTitles={bookingsTitles} />
    </>
  );
};

export default BookingsPage;
