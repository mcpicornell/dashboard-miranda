import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { RowContent } from "./RowContent";
import { NavLink } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import {
  IBookings,
  IContacts,
  IRooms,
  IUsers,
  IBookingsTitles,
  IUsersTitles,
  IRoomsTitles,
  IContactsTitles,
} from "../features/interfaces";
import { useEffect } from "react";

interface PropsTable {
  roomsTitles?: IRoomsTitles,
  roomsData?: IRooms[],
  usersTitles?: IUsersTitles,
  usersData?: IUsers[],
  bookingsTitles?: IBookingsTitles,
  bookingsData?: IBookings[],
  contactsData?: IContacts[],
  contactsTitles?: IContactsTitles
}

interface PropsActive {
  filterActive: boolean;
}

export const Table = (props: PropsTable): React.ReactElement | null => {
  const [allEmployeeActivate, setAllEmployeeActivate] = useState(true);
  const [activeEmployeeActivate, setActiveEmployeeActivate] = useState(false);
  const [inactiveEmployeeActivate, setInactiveEmployeeActivate] =
    useState(false);

  const [allContactsActivate, setAllContactsActivate] = useState(true);
  const [archivedActivate, setArchivedActivate] = useState(false)


  const [allRoomsActivate, setAllRoomsActivate] = useState(true);
  const [avaliableRoomsActivate, setAvaliableRoomsActivate] = useState(false);
  const [bookedRoomsActivate, setBookedRoomsActivate] = useState(false);

  const [allBookingsActivate, setAllBookingsActivate] = useState(true);
  const [checkInActivate, setCheckInActivate] = useState(false);
  const [checkOutActivate, setCheckOutActivate] = useState(false);
  const [inProgressBookingsActivate, setInProgressBokingsActivate] =
    useState(false);

  const bookingsDataVar = props.bookingsData;
  const roomsDataVar = props.roomsData;
  const usersDataVar = props.usersData;
  const contactsDataVar = props.contactsData;

  const [bookingsData, setBookingsData] = useState<IBookings[] | undefined>(
    bookingsDataVar
  );
  const [roomsData, setRoomsData] = useState<IRooms[] | undefined>(
    roomsDataVar
  );
  const [usersData, setUsersData] = useState<IUsers[] | undefined>(
    usersDataVar
  );

  const [contactsData, setContactsData] = useState<IContacts[] | undefined>(
    contactsDataVar
  );
  
  const [searchString, setSearchString] = useState("");

  const location = useLocation();
  let content: JSX.Element[] = [];

  useEffect(() => {
    setBookingsData(props.bookingsData);
    setRoomsData(props.roomsData);
    setUsersData(props.usersData);
    setContactsData(props.contactsData);
    setAllBookingsActivate(false);
    setActiveEmployeeActivate(false);
  }, [props.bookingsData, props.roomsData, props.usersData, props.contactsData]);

  const allBookingsActivateOnClick = () => {
    setAllBookingsActivate(true);
    setCheckInActivate(false);
    setCheckOutActivate(false);
    setInProgressBokingsActivate(false);
    setBookingsData(bookingsDataVar);
  };

  const allContactsActivateOnClick = () => {
    setAllContactsActivate(true);
    setArchivedActivate(false);
    setContactsData(contactsDataVar);
  };

  const allArchiveOnClick = () => {
    setAllContactsActivate(false);
    setArchivedActivate(true);
    setContactsData(contactsDataVar!.filter((element) => element.isArchive === true));
  };

  const checkInActivateOnClick = () => {
    setAllBookingsActivate(false);
    setCheckInActivate(true);
    setCheckOutActivate(false);
    setInProgressBokingsActivate(false);
    setBookingsData(
      bookingsDataVar!.filter((element) => element.status === "Check In")
    );
  };

  const checkOutActivateOnClick = () => {
    setAllBookingsActivate(false);
    setCheckInActivate(false);
    setCheckOutActivate(true);
    setInProgressBokingsActivate(false);
    setBookingsData(
      bookingsDataVar!.filter((element) => element.status === "Check Out")
    );
  };

  const inProgressBookingsActivateOnClick = () => {
    setInProgressBokingsActivate(true);
    setAllBookingsActivate(false);
    setCheckInActivate(false);
    setCheckOutActivate(false);
    setBookingsData(
      bookingsDataVar!.filter((element) => element.status === "In Progress")
    );
  };

  const allEmployeeActivateOnClick = () => {
    setUsersData(props.usersData);
    setInactiveEmployeeActivate(false);
    setActiveEmployeeActivate(false);
    setAllEmployeeActivate(true);
  };

  const activeEmployeeActivateOnClick = () => {
    setUsersData(
      props.usersData!.filter((element) => element.isActive === true)
    );
    setActiveEmployeeActivate(true);
    setAllEmployeeActivate(false);
    setInactiveEmployeeActivate(false);
  };

  const inactiveEmployeeActivateOnClick = () => {
    setUsersData(
      props.usersData!.filter((element) => element.isActive === false)
    );
    setInactiveEmployeeActivate(true);
    setAllEmployeeActivate(false);
    setActiveEmployeeActivate(false);
  };

  const allRoomsActivateOnClick = () => {
    setRoomsData(props.roomsData);
    setAllRoomsActivate(true);
    setBookedRoomsActivate(false);
    setAvaliableRoomsActivate(false);
  };

  const avaliableRoomsActivateOnClick = () => {
    setRoomsData(
      props.roomsData!.filter((element) => element.isAvailable === true)
    );
    setAvaliableRoomsActivate(true);
    setAllRoomsActivate(false);
    setBookedRoomsActivate(false);
  };

  const bookedRoomsActivateOnClick = () => {
    setRoomsData(
      props.roomsData!.filter((element) => element.isAvailable === false)
    );
    setBookedRoomsActivate(true);
    setAvaliableRoomsActivate(false);
    setAllRoomsActivate(false);
  };

  const searcherHandlerOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setSearchString(inputValue);

    if (inputValue.length > 0) {
      switch (location.pathname) {
        case "/bookings":
          if (bookingsData) {
            const filteredBookings = bookingsData.filter((element) => {
              const guest = element.guest.toLocaleLowerCase();
              return guest.includes(inputValue.toLowerCase());
            });
            setBookingsData(filteredBookings);
          }
          break;
        case "/users":
          if (usersData) {
            const filteredUsers = usersData.filter((element) => {
              const name = element.name.toLocaleLowerCase();
              return name.includes(inputValue.toLowerCase());
            });
            setUsersData(filteredUsers);
          }
          break;
        default:
          break;
      }
    } else {
      if (location.pathname === "/users") {
        setUsersData(props.usersData);
      } else {
        setBookingsData(props.bookingsData);
      }
    }
  };

  switch (location.pathname) {
    case "/bookings":
      if (bookingsData) {
        bookingsData.forEach((data) => {
          if(data){
            const bookingObj = {
              guest: data.guest,
              orderDate: data.orderDate,
              checkIn: data.checkIn,
              _id: data._id,
              checkOut: data.checkOut,
              specialRequest: data.specialRequest,
              roomObj: data.roomObj,
              status: data.status,
            };
            content.push(
              <>
                <RowContent bookingObj={bookingObj} />
              </>
            );
          } 
        });
      }

      return (
        <>
          <TableStyled>
            <TopOptions>
              <OptionsFilter>
                <FilterEmployee
                  filterActive={allBookingsActivate}
                  onClick={allBookingsActivateOnClick}
                >
                  <span>All Bookings</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={checkInActivate}
                  onClick={checkInActivateOnClick}
                >
                  <span>Checking In</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={checkOutActivate}
                  onClick={checkOutActivateOnClick}
                >
                  <span>Checking Out</span>
                </FilterEmployee>

                <FilterEmployee
                  filterActive={inProgressBookingsActivate}
                  onClick={inProgressBookingsActivateOnClick}
                >
                  <span>In Progress</span>
                </FilterEmployee>

                <FilterContainer>
                <FilterSearcher
                  placeholder="Search by Guest name"
                  type="text"
                  onChange={searcherHandlerOnChange}
                />
                <IconComponent icon={search} />
                </FilterContainer>

                
              </OptionsFilter>
              <OptionsCreate>
                <ButtonCreateEmployee to={"/bookings/addBooking"}>
                  <span>+ New Booking</span>
                </ButtonCreateEmployee>
              </OptionsCreate>
            </TopOptions>
            <TitleRowBookings>
              <TitleRowElement className="titleRowElementName">
                <span>{props.bookingsTitles?.guestName}</span>
              </TitleRowElement>
              <TitleRowElement>
                {props.bookingsTitles?.orderDate}
              </TitleRowElement>
              <TitleRowElement>{props.bookingsTitles?.checkIn}</TitleRowElement>
              <TitleRowElement>
                {props.bookingsTitles?.checkOut}
              </TitleRowElement>
              <TitleRowElement>
                {props.bookingsTitles?.specialRequest}
              </TitleRowElement>
              <TitleRowElement>
                {props.bookingsTitles?.roomType}
              </TitleRowElement>
              <TitleRowElement>{props.bookingsTitles?.status}</TitleRowElement>
            </TitleRowBookings>

            <Rows>{content}</Rows>
          </TableStyled>
        </>
      );
    case "/contacts":
      if(contactsData){
        contactsData.forEach((data) => {
          const contactObj = {
            date: data.date,
            customerName: data.customerName,
            customerEmail: data.customerEmail,
            customerPhoneNumber: data.customerPhoneNumber,
            subject: data.subject,
            comment: data.comment,
            isArchive: data.isArchive,
            _id: data._id
          };
  
          content.push(
            <>
              <RowContent setContactsData={setContactsData} contactsDataVar={contactsDataVar}   contactObj={contactObj} setAllContactsActivate={setAllContactsActivate} setArchivedActivate={setArchivedActivate}/>
            </>
          );
        })
      }

      return (
        <>
          <TableStyled>
            <TopOptions>
              <OptionsFilter>
                <FilterEmployee
                  filterActive={allContactsActivate}
                  onClick={allContactsActivateOnClick}
                >
                  <span>All Contacts</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={archivedActivate}
                  onClick={allArchiveOnClick}
                >
                  <span>Archived</span>
                </FilterEmployee>
              </OptionsFilter>
            </TopOptions>
            <TitleRowContacts>
              <TitleRowElement className="titleRowElementName">
                <span>{props.contactsTitles?.orderId}</span>
              </TitleRowElement>
              <TitleRowElement>
                {props.contactsTitles?.date}
              </TitleRowElement>
              <TitleRowElement>{props.contactsTitles?.customer}</TitleRowElement>
              <TitleRowElement>{props.contactsTitles?.comment}</TitleRowElement>
              <TitleRowElement>{props.contactsTitles?.action}</TitleRowElement>
            </TitleRowContacts>

            <Rows>{content}</Rows>
          </TableStyled>
        </>
      );

    case "/rooms":
      roomsData?.forEach((data) => {
        const roomObj = {
          photos: data.photos,
          roomName: data.roomName,
          roomNumber: data.roomNumber,
          roomType: data.roomType,
          _id: data._id,
          amenities: data.amenities,
          price: data.price,
          offerPrice: data.offerPrice,
          isAvailable: data.isAvailable,
        };
        content.push(
          <>
            <RowContent roomObj={roomObj} />
          </>
        );
      });
      return (
        <>
          <TableStyled>
            <TopOptions>
              <OptionsFilter>
                <FilterEmployee
                  filterActive={allRoomsActivate}
                  onClick={allRoomsActivateOnClick}
                >
                  <span>All Rooms</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={avaliableRoomsActivate}
                  onClick={avaliableRoomsActivateOnClick}
                >
                  <span>Avaliable Rooms</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={bookedRoomsActivate}
                  onClick={bookedRoomsActivateOnClick}
                >
                  <span>Booked Rooms</span>
                </FilterEmployee>
              </OptionsFilter>
              <OptionsCreate>
                <ButtonCreateEmployee to={"/rooms/addRoom"}>
                  <span>+ New Room</span>
                </ButtonCreateEmployee>
              </OptionsCreate>
            </TopOptions>
            <TitleRowRooms>
              <TitleRowElement className="titleRowElementName">
                <span>{props.roomsTitles?.roomName}</span>
              </TitleRowElement>
              <TitleRowElement>{props.roomsTitles?.roomType}</TitleRowElement>
              <TitleRowElement>{props.roomsTitles?.amenities}</TitleRowElement>
              <TitleRowElement>{props.roomsTitles?.price}</TitleRowElement>
              <TitleRowElement>{props.roomsTitles?.offerPrice}</TitleRowElement>
              <TitleRowElement>{props.roomsTitles?.status}</TitleRowElement>
            </TitleRowRooms>

            <Rows>{content}</Rows>
          </TableStyled>
        </>
      );

    case "/users":
      usersData?.forEach((data) => {
        const userObj = {
          contact: data.contact,
          descriptionJob: data.descriptionJob,
          email: data.email,
          _id: data._id,
          name: data.name,
          photo: data.photo,
          startDate: data.startDate,
          isActive: data.isActive,
          password: data.password,
          isAdmin: data.isAdmin,
        };

        content.push(
          <>
            <RowContent userObj={userObj} />
          </>
        );
      });

      return (
        <>
          <TableStyled>
            <TopOptions>
              <OptionsFilter>
                <FilterEmployee
                  filterActive={allEmployeeActivate}
                  onClick={allEmployeeActivateOnClick}
                >
                  <span>All Employee</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={activeEmployeeActivate}
                  onClick={activeEmployeeActivateOnClick}
                >
                  <span>Active Employee</span>
                </FilterEmployee>
                <FilterEmployee
                  filterActive={inactiveEmployeeActivate}
                  onClick={inactiveEmployeeActivateOnClick}
                >
                  <span>Inactive Employee</span>
                </FilterEmployee>
                <FilterContainer>
                <FilterSearcher
                  placeholder="Search employee by name"
                  onChange={searcherHandlerOnChange}
                />
                <IconComponent icon={search} />
                </FilterContainer>
                
              </OptionsFilter>
              <OptionsCreate>
                <ButtonCreateEmployee to={"/users/addUser"}>
                  <span>+ New Employee</span>
                </ButtonCreateEmployee>
              </OptionsCreate>
            </TopOptions>
            <TitleRow>
              <TitleRowElement className="titleRowElementName">
                <span>{props.usersTitles?.name}</span>
              </TitleRowElement>
              <TitleRowElement>
                {props.usersTitles?.description}
              </TitleRowElement>
              <TitleRowElement>{props.usersTitles?.contact}</TitleRowElement>
              <TitleRowElement>{props.usersTitles?.status}</TitleRowElement>
            </TitleRow>

            <Rows>{content}</Rows>
          </TableStyled>
        </>
      );
    default:
      return null;
  }
};

const TableStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 90%;
  border-radius: 20px;
`;

const TopOptions = styled.div`
  margin-top: 160px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 5px;
  padding-bottom: 15px;
`;

const OptionsFilter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FilterEmployee = styled.a<PropsActive>`
  padding: 0px 20px 15px 20px;

  font-weight: 600;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  opacity: 1;
  color: ${(props) => (props.filterActive === true ? "#135846" : "#6E6E6E")};
  border-bottom: ${(props) =>
    props.filterActive === true ? "  2px solid #135846" : "1px solid #6E6E6E"};

  :hover {
    cursor: pointer;
  }
`;

const FilterSearcher = styled.input`
  margin-left: 20px;
  background-color: #f8f8f8;
  width: 100px;
  border: none;
  border-bottom: 2px solid #135846;
  outline: none;
  width: 180px;
  padding-bottom: 10px;
  position: relative;
  bottom: -7px;
`;

const IconComponent = styled(Icon)`
  color: #135846;
  position: absolute;
  right: 0px;
  bottom: 10px;
`

const FilterContainer = styled.div`
  position: relative;
  .searchIcon{
    position: absolute;
    color: #135846;
  }
`

const OptionsCreate = styled.div``;

export const ButtonCreateEmployee = styled(NavLink)`
  background-color: #135846;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  color: #ffffff;
  text-decoration: none;
`;

const Rows = styled.div`
  margin-top: 0px;
  width: 100%;
`;

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background-color: #ffffff;
  text-align: left;
  font: normal normal 600 18px/27px "Poppins";
  padding-top: 20px;
  padding-bottom: 10px;
  border-radius: 10px 10px 0px 0px;
`;

const TitleRowContacts = styled(TitleRow)`
grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr;

`

const TitleRowRooms = styled(TitleRow)`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
`;

const TitleRowBookings = styled(TitleRow)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const TitleRowElement = styled.span`
  span {
    padding-left: 30px;
  }
`;
