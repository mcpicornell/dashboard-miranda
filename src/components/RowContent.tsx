import styled from "styled-components";
import { HiPhone } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteBooking } from "../features/bookings/fetchBookings";
import { deleteUser } from "../features/users/fetchUsers";
import { deleteRoom } from "../features/rooms/fetchRooms";
import { useLocation, useNavigate } from "react-router-dom";
import { IBookings, IContacts, IRooms, IUsers } from "../features/interfaces";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useEffect, useState } from "react";
import { sliceID } from "../features/functions";
import { editContact } from "../features/contact/fetchContacts";

interface PropsRowContent {
  bookingObj?: IBookings,
  roomObj?: IRooms,
  userObj?: IUsers,
  contactObj?: IContacts,
  setArchivedActivate?: Function,
  setAllContactsActivate?: Function,
  setContactsData?: Function,
  contactsDataVar?: IContacts[]
}

interface PropsIsArchive {
  isArchive: boolean | undefined
}

interface PropsStatus {
  status: string | undefined;
}

interface PropsIsActive {
  isActive: boolean | undefined;
}

interface PropsIsAdmin {
  isAdmin: boolean | undefined;
}

interface PropsIsAvaliable {
  isAvaliable: boolean | undefined;
}

interface PropsActive {
  active: boolean;
}

export const RowContent = (
  props: PropsRowContent
): React.ReactElement | null => {
  const [activeRow, setActiveRow] = useState(null);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const [deleteOption, setdeleteOption] = useState(false);
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleMouseEnter = (rowId: any) => {
    setActiveRow(rowId);
  };

  const handleMouseLeave = () => {
    setActiveRow(null);
  };
  const showDeleteOption = () => {
    setdeleteOption((prevState) => !prevState);
    setTimeout(() => {
      setdeleteOption(false);
    }, 2000);
  };

  const navToBookingDetailsOnClick = () => {
    if (props.bookingObj) {
      nav(`/bookings/${props.bookingObj?._id}`, { state: props.bookingObj });
    }
  };

  const deleteBookingOnClick = () => {
    if (props.bookingObj) {
      dispatch(deleteBooking(props.bookingObj._id!));
      setdeleteOption((prevState) => !prevState);
    }
  };

  const archiveContact = () => {
    if(props.contactObj){
      console.log(props.contactObj)
      const contactObj = {...props.contactObj, isArchive: true}
      console.log(contactObj)
      dispatch(editContact(contactObj))
      if(props.setArchivedActivate && props.setAllContactsActivate && props.setContactsData && props.contactsDataVar){
        props.setArchivedActivate(true)
        props.setAllContactsActivate(false)
        props.setContactsData(props.contactsDataVar!.filter((element) => element.isArchive === true))
      }
    }
  }

  const deleteUserClick = () => {
    if (props.userObj) {
      dispatch(deleteUser(props.userObj._id!));
      setdeleteOption((prevState) => !prevState);
    }
  };

  const deleteRoomsClick = () => {
    if (props.roomObj) {
      dispatch(deleteRoom(props.roomObj._id!));
      setdeleteOption((prevState) => !prevState);
    }
  };

  const arrayWithoutEmptyStrings = (array?: string[]) => {
    if (array !== undefined) {
      const result = array
        .filter((element) => element !== undefined)
        .join(", ");
      return result;
    } else {
      return null;
    }
  };

  useEffect(() => {}, [props.bookingObj, props.roomObj, props.userObj, props.contactObj]);

  switch (location.pathname) {
    case "/bookings":
      return (
        <ContainerBookings
          onMouseEnter={() => handleMouseEnter(props.bookingObj?._id)}
          onMouseLeave={handleMouseLeave}
        >
          <NameInfo>
            <NameProperties onClick={navToBookingDetailsOnClick}>
              <ElementGreyName>
                <div id={sliceID(props.bookingObj?._id!, 6)}></div>
              </ElementGreyName>
              <h5>{props.bookingObj?.guest}</h5>
            </NameProperties>
          </NameInfo>

          <Description onClick={navToBookingDetailsOnClick}>
            <ElementGrey>{props.bookingObj?.orderDate}</ElementGrey>
          </Description>

          <Contact onClick={navToBookingDetailsOnClick}>
            <ElementGrey>{props.bookingObj?.checkIn}</ElementGrey>
          </Contact>

          <Contact onClick={navToBookingDetailsOnClick}>
            <ElementGrey>{props.bookingObj?.checkOut}</ElementGrey>
          </Contact>

          <ButtonShowRequest onClick={openModal}>
            Show Request
          </ButtonShowRequest>
          {showModal && (
            <ModalWrapper onClick={closeModal}>
              <ModalContent>
                <ModalDescription>
                  {props.bookingObj?.specialRequest}
                </ModalDescription>
              </ModalContent>
            </ModalWrapper>
          )}

          <Contact>
            <ElementGrey>{props.bookingObj?.roomObj.roomType}</ElementGrey>
          </Contact>

          <Status>
            <StatusSpanBookings status={props.bookingObj?.status}>
              {" "}
              {props.bookingObj?.status}{" "}
            </StatusSpanBookings>
            <DeleteButtonsContainer>
              <DeleteButton onClick={showDeleteOption}>
                <BsThreeDotsVertical />
              </DeleteButton>
              <DeleteOption
                active={deleteOption}
                onClick={deleteBookingOnClick}
              >
                <span>Delete</span>
              </DeleteOption>
            </DeleteButtonsContainer>
          </Status>
        </ContainerBookings>
      );
    

    case "/contacts":
      let archiveString: string;
      
      return (
        <ContainerContacts>
          <NameInfo>
            <NameProperties>
              <ElementGreyName>
                #{sliceID(props.contactObj?._id!, 6)}
              </ElementGreyName>
            </NameProperties>
          </NameInfo>

          <Contact>
            <ElementGrey>{props.contactObj?.date}</ElementGrey>
          </Contact>

          <Contact>
            <ElementGrey>
              {props.contactObj?.customerName}
            </ElementGrey>
          </Contact>

          <ContactDescription>
            {props.contactObj?.comment}
          </ContactDescription>


          <ContactElementContainer>
            <StatusSpanContacts onClick={archiveContact} isArchive={props.contactObj?.isArchive}>
                Archive
            </StatusSpanContacts>
          </ContactElementContainer>
          
        </ContainerContacts>
      );
    case "/rooms":
      let isAvailable: string;
      if (props.roomObj?.isAvailable === true) {
        isAvailable = "Avaliable";
      } else {
        isAvailable = "Booked";
      }

      return (
        <ContainerRooms>
          <NameInfo>
            <ImgContainer>
              <img src={props.roomObj?.photos[0]} />
            </ImgContainer>
            <NameProperties>
              <ElementGreyName>
                #{sliceID(props.roomObj?._id!, 6)}
              </ElementGreyName>
              <h5>{props.roomObj?.roomName}</h5>
            </NameProperties>
          </NameInfo>

          <Description>
            <ElementGrey>{props.roomObj?.roomType}</ElementGrey>
          </Description>

          <Contact>
            <ElementGrey>
              {arrayWithoutEmptyStrings(props.roomObj?.amenities)}
            </ElementGrey>
          </Contact>

          <Price>
            ${props.roomObj?.price}
            <span>/Night</span>
          </Price>

          <OfferPrice>
            ${props.roomObj?.offerPrice}
            <span>/Night</span>
          </OfferPrice>

          <Status>
            <StatusSpanRooms isAvaliable={props.roomObj?.isAvailable}>
              {isAvailable}
            </StatusSpanRooms>
            <DeleteButtonContainerRooms
              isAvaliable={props.roomObj?.isAvailable}
            >
              <DeleteButton onClick={showDeleteOption}>
                <BsThreeDotsVertical />
              </DeleteButton>
              <DeleteOption active={deleteOption} onClick={deleteRoomsClick}>
                <span>Delete</span>
              </DeleteOption>
            </DeleteButtonContainerRooms>
          </Status>
        </ContainerRooms>
      );

    case "/users":
      let isActive: string;

      if (props.userObj?.isActive === true) {
        isActive = "Active";
      } else {
        isActive = "Inactive";
      }
      return (
        <Container>
          <NameInfo>
            <ImgContainer>
              <img src={props.userObj?.photo} />
            </ImgContainer>
            <NameProperties>
              <h5>{props.userObj?.name}</h5>
              <ElementGreyName>
                #{sliceID(props.userObj?._id!, 6)}
              </ElementGreyName>
              <ElementGreyName>{props.userObj?.email}</ElementGreyName>
              <ElementGreyName>{props.userObj?.startDate}</ElementGreyName>
            </NameProperties>
          </NameInfo>

          <Description>
            <ElementGrey>{props.userObj?.descriptionJob}</ElementGrey>
          </Description>

          <Contact>
            <HiPhone className="rowContent__telephoneIcon" />
            <ElementGrey>{props.userObj?.contact}</ElementGrey>
          </Contact>

          <Status>
            <StatusSpan isActive={props.userObj?.isActive}>
              {" "}
              {isActive}{" "}
            </StatusSpan>
            <DeleteButtonsContainerUsers isAdmin={props.userObj?.isAdmin}>
              <DeleteButton onClick={showDeleteOption}>
                <BsThreeDotsVertical />
              </DeleteButton>
              <DeleteOption active={deleteOption} onClick={deleteUserClick}>
                <span>Delete</span>
              </DeleteOption>
            </DeleteButtonsContainerUsers>
          </Status>
        </Container>
      );
    default:
      return null;
  }
};

const Container = styled.section`
  padding: 10px 30px 10px 30px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  width: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 10px 10px;
  opacity: 1;
  align-items: center;
  margin-top: 1px;
  :hover {
    transition: all 0.3s;
    transform: scale(1.015);
  }
  :not(:hover) {
    transition: all 0.3s;
  }
`;

const ContactsContainer = styled.section`

`

const ContainerRooms = styled(Container)`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 30px 10px 30px;
  width: auto;
  border-radius: 0px 0px 10px 10px;
  opacity: 1;
  align-items: center;
`;

const ContainerContacts = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr;
padding: 10px 30px 10px 40px;
width: auto;
background: #ffffff 0% 0% no-repeat padding-box;
border-radius: 0px 0px 10px 10px;
opacity: 1;
align-items: center;
margin-top: 1px;
`


const ContainerBookings = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  :hover {
    cursor: pointer;
  }
`;

const NameInfo = styled.div`
  display: flex;
  width: auto;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  margin-right: 10px;
  padding-right: 10px;

  img {
    width: 70px;
    border-radius: 10px;
    height: 70px;
  }
`;

const ElementGrey = styled.span`
  margin-top: 0px;
  font: normal normal normal 12px "Poppins";
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const ElementGreyName = styled.span`
  margin-top: 2px;
  font-size: 11px;
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
`;

const NameProperties = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  h5 {
    margin: 0px;
    padding-bottom: 0px;
    font-size: 14px;
    letter-spacing: 0px;
    color: #212121;
    opacity: 1;
  }
`;

const Description = styled.div`
  width: auto;
`;

const ContactElementContainer = styled.div`
  margin-left: 20px;
`
const ContactDescription = styled(Description)`
font-size: 12px;
margin-right: 10px;
`
const Contact = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  width: auto;
  .rowContent__telephoneIcon {
    margin-right: 10px;
  }
`;

const Status = styled.div`
  width: auto;
  font: normal normal 600 14px/21px "Poppins";
  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusSpan = styled.span<PropsIsActive>`
  margin-left: 20px;
  text-transform: uppercase;
  font: normal normal 600 14px/21px "Poppins";
  color: ${(props) => (props.isActive === true ? "#5AD07A" : "#E23428")};
`;

export const StatusSpanBookings = styled.span<PropsStatus>`
  margin-left: 0px;
  width: 68px;
  padding: 5px 12px 5px 12px;
  font: normal normal 600 14px/21px "Poppins";
  font-size: 12px;
  border-radius: 15px;
  text-align: center;
  color: ${(props) =>
    props.status === "Check In"
      ? "#5AD07A"
      : props.status === "Check Out"
      ? "#E23428"
      : "#F7DE3A"};
  background-color: ${(props) =>
    props.status === "Check In"
      ? "#E8FFEE"
      : props.status === "Check Out"
      ? "#FFEDEC"
      : "#f8f8ed"};
`;

const StatusSpanRooms = styled.span<PropsIsAvaliable>`
  text-align: center;
  font: normal normal 600 14px/21px "Poppins";
  color: #ffffff;
  background-color: ${(props) =>
    props.isAvaliable === true ? "#5AD07A" : "#E23428"};
  border-radius: 15px;
  width: 70px;
  padding: 10px 20px 10px 20px;
`;

const DeleteButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteButtonsContainerUsers = styled(
  DeleteButtonsContainer
)<PropsIsAdmin>`
  visibility: ${(props) => (props.isAdmin === true ? "hidden" : "visible")};
`;

const DeleteButton = styled.a`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const DeleteOption = styled.a<PropsActive>`
  margin-top: 5px;
  color: #e23428;
  font-size: 14px;
  font-weight: 600;
  opacity: 1;
  background-color: #f8f8f8;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  visibility: ${(props) => (props.active === true ? "visible" : "hidden")};
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;

const Price = styled.span`
  width: auto;
`;

const OfferPrice = styled.span`
  width: auto;
`;
const ModalWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 90%;
  height: 50%;
`;

const ModalDescription = styled.p`
  margin-bottom: 0;
  font-size: 12px;
`;

const ButtonShowRequest = styled.a`
  text-align: center;
  font: normal normal 600 12px "Poppins";
  color: #0a7cee;
  background-color: "#5AD07A";
  border-radius: 15px;
  width: 90px;
  padding: 7px 10px 7px 10px;
  background-color: #cddeef;
`;

const DeleteButtonContainerRooms = styled(
  DeleteButtonsContainer
)<PropsIsAvaliable>`
  visibility: ${(props) =>
    props.isAvaliable === false ? "hidden" : "visible"};
`;

const StatusSpanContacts = styled.span<PropsIsArchive>`
  text-align: center;
  font: normal normal 600 14px/21px "Poppins";
  color: ${(props) =>
    props.isArchive === true ? "#3c4046" : "#E23428"};
  border-radius: 15px;
  width: 70px;
  :hover{
    cursor: pointer;
    text-decoration: underline 1px "#E23428";
  }
`