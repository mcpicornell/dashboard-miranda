import { StatusButton, NotesButton } from "../components/Button";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {RowContent}  from "../components/RowContent"
import { NavLink } from "react-router-dom";

export const Table = (props) => {
  const [allEmployeeActivate, setAllEmployeeActivate] = useState(false);
  const [activeEmployeeActivate, setActiveEmployeeActivate] = useState(false);
  const [inactiveEmployeeActivate, setInactiveEmployeeActivate] = useState(false);
  const [inProgressActive, setInProgressActive] = useState(false);
  const [searcher, setSearcher] = useState("");
  const location = useLocation();
  const dataArr = props.data;
  const bookingsData = props.bookingsData;
  const roomsData = props.roomsData;
  const usersData = props.usersData;
  const content = [];
  
  const allEmployeeActivateOnClick = (event) => {
    setAllEmployeeActivate(true);
    setInactiveEmployeeActivate(false)
    setActiveEmployeeActivate(false)
    setInProgressActive(false);
  };

  const activeEmployeeActivateOnClick = (event) => {
    setActiveEmployeeActivate(true);
    setAllEmployeeActivate(false)
    setInactiveEmployeeActivate(false)
    setInProgressActive(false);
  };

  const inactiveEmployeeActivateOnClick = (event) => {
    setInactiveEmployeeActivate(true);
    setAllEmployeeActivate(false)
    setActiveEmployeeActivate(false)
    setInProgressActive(false);
    }
  

  const inProgressActiveOnClick = (event) =>{
    setInProgressActive(true);
    setAllEmployeeActivate(false)
    setActiveEmployeeActivate(false)
    setInactiveEmployeeActivate(false)
    setAllEmployeeActivate(false)
  }


  switch(location.pathname){
    case "/bookings":
    bookingsData.forEach((data) => { 
      const info = 
      {
        guest: data.guest,
        orderDate: data.orderDate,
        checkIn: data.checkIn,
        id: data.id,
        checkOut: data.checkOut,
        specialRequest: data.specialRequest,
        roomType: data.roomType,
        status: data.status
      }

      content.push(
          <>
            <RowContent info={info}/>
          </>
        );
        
      });
      
      return(
        <>
        <TableStyled>
            <TopOptions>
                <OptionsFilter>
                  <FilterEmployee filterActive={allEmployeeActivate} onClick={allEmployeeActivateOnClick}>
                    <span>All Bookings</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={activeEmployeeActivate} onClick={activeEmployeeActivateOnClick}>
                    <span>Checking In</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={inactiveEmployeeActivate} onClick={inactiveEmployeeActivateOnClick}>
                    <span>Checking Out</span>
                  </FilterEmployee>

                  <FilterEmployee filterActive={inProgressActive} onClick={inProgressActiveOnClick}>
                    <span>In Progress</span>
                  </FilterEmployee>

                  <FilterSearcher placeholder="Search by Guest name" onChange={e => setSearcher(e.target.value)}/>

                </OptionsFilter>
                <OptionsCreate>
                    <ButtonCreateEmployee to={'/bookings/addBooking'}>
                      <span>+ New Booking</span>
                    </ButtonCreateEmployee>
                </OptionsCreate>
            </TopOptions>
            <TitleRowBookings>
              <TitleRowElement className="titleRowElementName"><span>{props.bookingsTitles.guestName}</span></TitleRowElement>
              <TitleRowElement>{props.bookingsTitles.orderDate}</TitleRowElement>
              <TitleRowElement>{props.bookingsTitles.checkIn}</TitleRowElement>
              <TitleRowElement>{props.bookingsTitles.checkOut}</TitleRowElement>
              <TitleRowElement>{props.bookingsTitles.specialRequest}</TitleRowElement>
              <TitleRowElement>{props.bookingsTitles.roomType}</TitleRowElement>
              <TitleRowElement>{props.bookingsTitles.status}</TitleRowElement>
            </TitleRowBookings>

            <Rows>
            {content}
            </Rows> 
          </TableStyled>
        </>
      );

    case "/rooms":
      

    roomsData.forEach((data) => { 
      const info = 
      {
        photos: data.photos,
        roomName: data.roomName,
        roomNumber: data.roomNumber,
        roomType: data.roomType,
        id: data.id,
        amenities: data.amenities,
        price: data.price,
        offerPrice: data.offerPrice,
        status: data.status
      }
      console.log(info)

      content.push(
          <>
            <RowContent info={info}/>
          </>
        );
        
      });
      return(
        <>
          <TableStyled>
            <TopOptions>
                <OptionsFilter>
                  <FilterEmployee filterActive={allEmployeeActivate} onClick={allEmployeeActivateOnClick}>
                    <span>All Rooms</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={activeEmployeeActivate} onClick={activeEmployeeActivateOnClick}>
                    <span>Avaliable Rooms</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={inactiveEmployeeActivate} onClick={inactiveEmployeeActivateOnClick}>
                    <span>Booked Rooms</span>
                  </FilterEmployee>

                </OptionsFilter>
                <OptionsCreate>
                    <ButtonCreateEmployee to={'/rooms/addRoom'}>
                      <span>+ New Room</span>
                    </ButtonCreateEmployee>
                </OptionsCreate>
            </TopOptions>
            <TitleRowRooms>
              <TitleRowElement className="titleRowElementName"><span>{props.roomTitles.roomName}</span></TitleRowElement>
              <TitleRowElement>{props.roomTitles.roomType}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.amenities}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.price}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.offerPrice}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.status}</TitleRowElement>
            </TitleRowRooms>

            <Rows>
            {content}
            </Rows> 
          </TableStyled>

        </>
      );
    
    case "/users":
      usersData.forEach((data) => { 
      const info = 
      {
        contact: data.contact,
        descriptionJob: data.descriptionJob,
        email: data.email,
        id: data.id,
        name: data.name,
        photo: data.photo,
        startDate: data.startDate,
        status: data.status
      }

      content.push(
          <>
            <RowContent info={info}/>
          </>
        );
        
      });
      

      return(
        <>

          <TableStyled>
            <TopOptions>
                <OptionsFilter>
                  <FilterEmployee filterActive={allEmployeeActivate} onClick={allEmployeeActivateOnClick}>
                    <span>All Employee</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={activeEmployeeActivate} onClick={activeEmployeeActivateOnClick}>
                    <span>Active Employee</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={inactiveEmployeeActivate} onClick={inactiveEmployeeActivateOnClick}>
                    <span>Inactive Employee</span>
                  </FilterEmployee>

                  <FilterSearcher placeholder="Search employee by name" onChange={e => setSearcher(e.target.value)}/>

                </OptionsFilter>
                <OptionsCreate>
                    <ButtonCreateEmployee to={'/users/addUser'}>
                      <span>+ New Employee</span>
                    </ButtonCreateEmployee>
                </OptionsCreate>
            </TopOptions>
            <TitleRow>
              <TitleRowElement className="titleRowElementName"><span>{props.titleRowUsers.name}</span></TitleRowElement>
              <TitleRowElement>{props.titleRowUsers.description}</TitleRowElement>
              <TitleRowElement>{props.titleRowUsers.contact}</TitleRowElement>
              <TitleRowElement>{props.titleRowUsers.status}</TitleRowElement>
            </TitleRow>

            <Rows>
            {content}
            </Rows> 
          </TableStyled>
          
        
        </>
      )

  }
  
};

const TableStyled = styled.section`

display: flex;
flex-direction: column;
margin-left: 40px;
width: 90%;
border-radius: 20px;
`

const TopOptions = styled.div`
  margin-top: 160px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 5px;
  padding-bottom: 15px;

`

const OptionsFilter = styled.div`
  display: flex;
  justify-content: space-around;

`

const FilterEmployee = styled.a`
  padding: 0px 20px 15px 20px;
  
  font-weight: 600;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  opacity: 1;
  color: ${props => props.filterActive === true ? "#135846" : "#6E6E6E"};
  border-bottom: ${props => props.filterActive === true ? "  2px solid #135846" : "1px solid #6E6E6E"};
  
  :hover{
    cursor: pointer;
  }
`

const FilterSearcher = styled.input`
  
  border-radius: 15px;
  margin-left: 20px;
  background-color: #F8F8F8;
  width: 100px;
  
  
`

const OptionsCreate = styled.div`

`

export const ButtonCreateEmployee = styled(NavLink)`
  background-color: #135846;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  color: #FFFFFF;
  text-decoration: none;
`

const Rows = styled.div`
margin-top: 0px;
width: 100%;
`

const TitleRow = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
background-color: #FFFFFF;
text-align: left;
font: normal normal 600 18px/27px 'Poppins';
padding-top: 20px;
padding-bottom: 10px;
border-radius: 10px 10px 0px 0px;
`

const TitleRowRooms = styled(TitleRow)`
display: grid;
grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
`

const TitleRowBookings = styled(TitleRow)`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

const TitleRowElement = styled.span`

  span{
    padding-left: 30px;
  }


`

