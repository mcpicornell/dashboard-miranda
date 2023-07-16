import styled from "styled-components";
import { BiBed } from "react-icons/bi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import Calendar from "reactjs-availability-calendar";
import "../styles/calendar.css";
import { useEffect } from "react";
import {
  getBookingsData,
  getBookingsStatus,
} from "../features/bookings/BookingsSlice";
import { useAppSelector, useAppDispatch } from "../app/store";
import { fetchBookings } from "../features/bookings/fetchBookings";
import {BookingChart} from "../components/BookingChart";
const Dashboard = () => {
  const bookingsData = useAppSelector(getBookingsData);
  const bookingsStatus = useAppSelector(getBookingsStatus);
  const dispatch = useAppDispatch();

  const dateConversor = (string: string) => {
    const date = new Date(string);
    return date;
  };

  useEffect(() => {
    if (bookingsStatus === "idle") {
      dispatch(fetchBookings());
    }
  }, [dispatch, bookingsData, bookingsStatus]);

  let calendarBookingDates;
  let scheduledRooms = 0;
  let newBookings = 0;
  let checkIn = 0;
  let checkOut = 0;
  const date = new Date();
  let checkInArr;
  let checkOutArr;


  if (bookingsData) {
    calendarBookingDates = bookingsData.map((element) => ({
      from: dateConversor(element.checkIn),
      to: dateConversor(element.checkOut),
      middayCheckout: true
    }));
    checkInArr = bookingsData.map((element) => ({
      date: element.checkIn}));
      checkOutArr = bookingsData.map((element) => ({
        date: element.checkOut}));

    for(let i = 0; i<bookingsData.length; i++){
      newBookings++;
      const checkInDate = new Date(bookingsData[i].checkIn)
      if(date < checkInDate){
        scheduledRooms++;
      }
      if(bookingsData[i].status === "Check In"){
        checkIn++;
      }
      else if(bookingsData[i].status === "Check Out"){
        checkOut++;
      }
    }
  }

  return (
    <>
      <Body>
        <Header>
          <HeaderElements>
            <BiBed className="bed" />
            <ElementsInformation>
              <ElementsInformationSpan>{newBookings}</ElementsInformationSpan>
              <ElementsInformationh4>New Booking</ElementsInformationh4>
            </ElementsInformation>
          </HeaderElements>

          <HeaderElements>
            <RiCalendarCheckLine className="bed" />
            <ElementsInformation>
              <ElementsInformationSpan>{scheduledRooms}</ElementsInformationSpan>
              <ElementsInformationh4>Scheduled Room</ElementsInformationh4>
            </ElementsInformation>
          </HeaderElements>

          <HeaderElements>
            <IoLogInOutline className="bed" />
            <ElementsInformation>
              <ElementsInformationSpan>{checkIn}</ElementsInformationSpan>
              <ElementsInformationh4>Check In</ElementsInformationh4>
            </ElementsInformation>
          </HeaderElements>

          <HeaderElements>
            <IoLogOutOutline className="bed" />
            <ElementsInformation>
              <ElementsInformationSpan>{checkOut}</ElementsInformationSpan>
              <ElementsInformationh4>Check Out</ElementsInformationh4>
            </ElementsInformation>
          </HeaderElements>
        </Header>
        <CalendarContainer>
        <Calendar showNumberOfMonths={1} bookings={calendarBookingDates} />
        <BookingChartContainer>
        {checkInArr && checkOutArr && (
        <BookingChart checkIns={checkInArr} checkOuts={checkOutArr} />
        )}  
        </BookingChartContainer>
        
      
        </CalendarContainer>
      </Body>
    </>
  );
};

export default Dashboard;

const Body = styled.div`
display: grid;
grid-template-rows: 1fr 3fr;
align-items: left;
`;

const Header = styled.header`
  margin-top: 150px;
  margin-left: 50px;
  display: flex;
  width: 100%;

  .bed {
    width: 80%;
    height: 40px;
    margin-top: 10px;
    margin-right: 22px;
    padding: 10px;
    background: #ffedec 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    color: #e23428;
  }
`;

const HeaderElements = styled.div`
  display: grid;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  opacity: 1;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  margin-right: 38px;
  padding-right: 110px;
  padding-left: 30px;
  padding-bottom: 10px;
  width: 70px;
`;

const ElementsInformation = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 50px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ElementsInformationSpan = styled.span`
  text-align: left;
  font: normal normal 600 26px "Poppins";
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
  width: 30px;
`;

const ElementsInformationh4 = styled.h4`
  margin: 0px;
  font: normal normal 300 12px "Poppins";
  letter-spacing: 0px;
  color: #787878;
  opacity: 1;
  width: 130px;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BookingChartContainer = styled.div`
width: 40%;
margin-left: 50px;
`