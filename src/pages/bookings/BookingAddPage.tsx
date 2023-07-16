import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addBooking } from "../../features/bookings/fetchBookings";
import { useNavigate } from "react-router-dom";
import { IBookings } from "../../features/interfaces";
import { showToast } from "../../features/functions";
import { getRoomsData, getRoomsStatus } from "../../features/rooms/RoomsSlice";
import { fetchRooms } from "../../features/rooms/fetchRooms";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { editRoom } from "../../features/rooms/fetchRooms";

const checksInCheckInOut = (checkIn: string, checkOut: string) => {
  const date = new Date();
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  if (checkInDate > checkOutDate) {
    return "Check Out";
  } else if (date >= checkInDate && date <= checkOutDate) {
    return "Check In";
  } else {
    return "In Progress";
  }
};

const BookingAddPage = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const [guestName, setGuestName] = useState<string>();
  const [orderDate, setOrderDate] = useState<string>();
  const [checkIn, setCheckIn] = useState<string>();
  const [checkOut, setCheckOut] = useState<string>();
  const [specialRequest, setSpecialRequest] =
    useState<string>("No special request");
  const [roomType, setRoomType] = useState<string>("Single Bed");
  const [state, setState] = useState<string>("In Progress");
  const roomsData = useAppSelector(getRoomsData);
  const roomsStatus = useAppSelector(getRoomsStatus);

  

  useEffect(() => {
    if (roomsStatus === "idle") {
      dispatch(fetchRooms());
    }
    const updateState = () => {
      setGuestName("Valor recibido para guestName");
      setOrderDate("Valor recibido para orderDate");
      setCheckIn("Valor recibido para checkIn");
      setCheckOut("Valor recibido para checkOut");
      setSpecialRequest("Valor recibido para special request");
    };
    updateState()

  }, [roomsStatus, dispatch, roomsData]);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const roomSelected = roomsData.find(
      (element) => element.roomType === roomType
    );

    const status = checksInCheckInOut(checkIn!, checkOut!)

    if (roomSelected) {
      const updatedRoom = { ...roomSelected, isAvailable: false };
      dispatch(editRoom(updatedRoom));

      const bookingPosted: IBookings = {
        guest: guestName!,
        orderDate: orderDate!,
        checkIn: checkIn!,
        checkOut: checkOut!,
        specialRequest: specialRequest!,
        roomObj: updatedRoom!,
        status: status,
      };

      console.log(bookingPosted)

      
      if(checkIn && checkOut && orderDate){
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const orderDateDate = new Date(orderDate);

        if(checkOutDate < checkInDate){
          showToast("Check in date cannot exceed check out date or be the same", "error");
        }
        else if(orderDateDate > checkInDate){
          showToast("Order date cannot exceed check in", "error");
        }
        else if(orderDateDate > checkOutDate){
          showToast("Order date cannot exceed check out date or be the same", "error");
        }
        
        else if(orderDateDate < checkInDate && checkInDate < checkOutDate) {
          dispatch(addBooking(bookingPosted));
          showToast("Booking created correctly!", "success");
          nav("/bookings");
        }
        
      }
      
    }
  };

  return (
    <FormUserContainer onSubmit={onSubmitHandler}>
      <OptionsContainer>
        <LabelCreateUser>Guest Name:</LabelCreateUser>
        <InputCreateUser
          required
          placeholder="type the guest name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setGuestName(event.target.value);
          }}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Order Date:</LabelCreateUser>
        <InputCreateUser
          required
          type="date"
          onChange={(e) => setOrderDate(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Check In:</LabelCreateUser>
        <InputCreateUser
          required
          type="date"
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Check Out:</LabelCreateUser>
        <InputCreateUser
          required
          type="date"
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Room Type:</LabelCreateUser>
        <SelectUserOption
          required
          onChange={(event) => setRoomType(event.target.value)}
        >
          <option value="Single Bed">Single Bed</option>
          <option value="Double Bed">Double Bed</option>
          <option value="Double Superior">Double Superior</option>
          <option value="Suite">Suite</option>
        </SelectUserOption>
      </OptionsContainer>

      <SpecialRequestContainer>
        <LabelCreateUser>Special Request:</LabelCreateUser>
        <SpecialRequestBox
          type="text"
          placeholder="type the guest request, max of 2000 characters"
          maxLength={2000}
          onChange={(e) => setSpecialRequest(e.target.value)}
        />
      </SpecialRequestContainer>

      <AddUser type="submit">Create New Booking</AddUser>
    </FormUserContainer>
  );
};

export default BookingAddPage;

const FormUserContainer = styled.form`
  margin-top: 170px;
  margin-left: 80px;
  padding: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  height: 400px;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LabelCreateUser = styled.label`
  margin-right: 30px;
  margin-bottom: 10px;
`;

const InputCreateUser = styled.input`
  margin-bottom: 10px;
`;

const SelectUserOption = styled.select`
  margin-bottom: 10px;
`;
const AddUser = styled.button`
  margin-right: 0;

  margin-top: 20px;
  font-weight: 700;
  background-color: #135846;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  color: #ffffff;
  text-decoration: none;
`;

const SpecialRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpecialRequestBox = styled.input`
  text-align: start;
  border-radius: 5px;
  padding-bottom: 90px;
  padding-top: 10px;
  padding-left: 10px;
  border: 1px solid grey;
`;
