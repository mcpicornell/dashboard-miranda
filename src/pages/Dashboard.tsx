import styled from "styled-components";
import { BiBed } from "react-icons/bi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import Calendar from 'reactjs-availability-calendar'
import '../styles/calendar.css'
import { useEffect } from "react";
import { getBookingsData, getBookingsStatus } from "../features/bookings/BookingsSlice";
import { useAppSelector, useAppDispatch } from "../app/store";
import { fetchBookings } from "../features/bookings/fetchBookings";
const Dashboard = () => {

  const bookingsData = useAppSelector(getBookingsData)
  const bookingsStatus = useAppSelector(getBookingsStatus)
  const dispatch = useAppDispatch()

  const dateConversor = (string: string) => {
    const date = new Date(string)
    return date
  }

  useEffect(() => {
    if(bookingsStatus === 'idle'){
      dispatch(fetchBookings())
    }
  },[dispatch, bookingsData, bookingsStatus])

  let calendarBookingDates;
  if(bookingsData){
    calendarBookingDates = bookingsData.map(element => ({from: dateConversor(element.checkIn), to: dateConversor(element.checkOut), middayCheckout: false}))
  }
  return (
    <>    
    <Body>

    <Header>
      <HeaderElements>
        <BiBed className="bed" />
        <ElementsInformation>
          <ElementsInformationSpan>8461</ElementsInformationSpan>
          <ElementsInformationh4>New Booking</ElementsInformationh4>
        </ElementsInformation>
      </HeaderElements>

      <HeaderElements>
        <RiCalendarCheckLine className="bed" />
        <ElementsInformation>
          <ElementsInformationSpan>963</ElementsInformationSpan>
          <ElementsInformationh4>Scheduled Room</ElementsInformationh4>
        </ElementsInformation>
      </HeaderElements>

      <HeaderElements>
        <IoLogInOutline className="bed" />
        <ElementsInformation>
          <ElementsInformationSpan>753</ElementsInformationSpan>
          <ElementsInformationh4>Check In</ElementsInformationh4>
        </ElementsInformation>
      </HeaderElements>

      <HeaderElements>
        <IoLogOutOutline className="bed" />
        <ElementsInformation>
          <ElementsInformationSpan>516</ElementsInformationSpan>
          <ElementsInformationh4>Check Out</ElementsInformationh4>
        </ElementsInformation>
      </HeaderElements>
    </Header>
      <Calendar showNumberOfMonths={1} bookings={calendarBookingDates}/>

    </Body>
    </>
  );
};

export default Dashboard;

const Body = styled.div`

`

const Header = styled.header`
  margin-top: 150px;
  margin-left: 50px;
  display: flex;
  width: 100%;

  .bed {
    width: 28px;
    height: 28px;
    margin-right: 22px;
    padding: 20px;
    background: #ffedec 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    color: #e23428;
  }
`;

const HeaderElements = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  opacity: 1;
  height: 125px;
  justify-content: center;
  align-items: center;
  margin-right: 38px;
  padding-right: 100px;
  padding-left: 30px;
`;

const ElementsInformation = styled.div`
  margin-top: 0px;
  margin-right: 38px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ElementsInformationSpan = styled.span`
  text-align: left;
  font: normal normal 600 30px/46px "Poppins";
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
`;

const ElementsInformationh4 = styled.h4`
  margin: 0px;
  font: normal normal 300 14px/21px "Poppins";
  letter-spacing: 0px;
  color: #787878;
  opacity: 1;
  width: 100px;
`;