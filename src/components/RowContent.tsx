import styled from "styled-components"
import {HiPhone} from "react-icons/hi"
import {BsThreeDotsVertical} from "react-icons/bs"
import { useState } from "react"
import { deleteBooking } from "../features/bookings/fetchBookings"
import { deleteUser } from "../features/users/fetchUsers"
import { deleteRoom } from "../features/rooms/fetchRooms"
import { useLocation, useNavigate } from "react-router-dom"
import { IBookings, IRooms, IUsers } from "../features/interfaces"
import { useAppDispatch, useAppSelector } from "../app/store"
import { useEffect } from "react"
import { sliceID } from "../features/functions"

interface PropsRowContent {
    bookingObj?: IBookings,
    roomObj?: IRooms,
    userObj?: IUsers
}

interface PropsStatus{
    status: string | undefined;
}

interface PropsIsActive{
    isActive: boolean | undefined;
}

interface PropsIsAvaliable{
    isAvaliable: boolean | undefined;
}

interface PropsActive{
    active: boolean;
}



export const RowContent = (props: PropsRowContent): React.ReactElement | null => {

    
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const [deleteOption, setdeleteOption] = useState(false);
    const location = useLocation();
    const showDeleteOption = () => {
        setdeleteOption(prevState => !prevState);
    }

    const navToBookingDetailsOnClick = () => {
        if(props.bookingObj){
        nav(`/bookings/${props.bookingObj?._id}`, {state:props.bookingObj})
        }
    }

    const deleteBookingOnClick = () =>{
        if(props.bookingObj){
            dispatch(deleteBooking(props.bookingObj._id!))
            setdeleteOption(prevState => !prevState)
        }
    }

    const deleteUserClick = () => {
        if(props.userObj){
            dispatch(deleteUser(props.userObj._id!))
            setdeleteOption(prevState => !prevState);
        }
    }

    const deleteRoomsClick = () => {
        
        if(props.roomObj){
            dispatch(deleteRoom(props.roomObj._id!))
            setdeleteOption(prevState => !prevState);
        }
    }

    const arrayWithoutEmptyStrings = (array?: string[]) =>{
        if (array !== undefined){
            const result = array.filter(element => element !== undefined).join(", ")
            return result;
        }
        else{
            return null;
        }
    }

    useEffect(() => {
           
      }, [props.bookingObj, props.roomObj, props.userObj]);
    
    switch(location.pathname){
        case "/bookings":
            return(
                <ContainerBookings onClick={navToBookingDetailsOnClick}>
                    <NameInfo>
                        <NameProperties>
                            <ElementGreyName><div id={sliceID(props.bookingObj?._id!, 6)}></div></ElementGreyName>
                            <h5>{props.bookingObj?.guest}</h5>
                        </NameProperties>
                    </NameInfo>

                    <Description>
                            <ElementGrey>{props.bookingObj?.orderDate}</ElementGrey>
                    </Description>

                    <Contact>
                            <ElementGrey>{props.bookingObj?.checkIn}</ElementGrey>
                    </Contact>

                    
                    <Contact>
                            <ElementGrey>{props.bookingObj?.checkOut}</ElementGrey>
                    </Contact>

                    <Contact>
                            <ElementGrey>{props.bookingObj?.specialRequest}</ElementGrey>
                    </Contact>

                    <Contact>
                            <ElementGrey>{props.bookingObj?.roomObj.roomType}</ElementGrey>
                    </Contact>

                    <Status >
                        <StatusSpanBookings status={props.bookingObj?.status}> {props.bookingObj?.status} </StatusSpanBookings>
                        <DeleteButtonsContainer>
                            <DeleteButton onClick={showDeleteOption}>
                                <BsThreeDotsVertical />
                            </DeleteButton>
                            <DeleteOption active={deleteOption} onClick={deleteBookingOnClick}>
                                    <span>Delete</span>
                            </DeleteOption>
                        </DeleteButtonsContainer>
                    </Status>
                </ContainerBookings>
            );

        case "/rooms":
        let isAvailable: string;
            if(props.roomObj?.isAvailable === true){
                isAvailable = "Avaliable"
            }
            else{
                isAvailable = "Booked"
            }
            
        return(
            <ContainerRooms >
                <NameInfo>
                        <ImgContainer>
                            <img src={props.roomObj?.photos[0]}/>
                        </ImgContainer>
                        <NameProperties>
                            <ElementGreyName>#{sliceID(props.roomObj?._id!, 6)}</ElementGreyName>
                            <h5>{props.roomObj?.roomName}</h5>
                        </NameProperties>
                        
                </NameInfo>

                <Description>
                        <ElementGrey>{props.roomObj?.roomType}</ElementGrey>
                </Description>

                <Contact>
                        <ElementGrey>{arrayWithoutEmptyStrings(props.roomObj?.amenities)}</ElementGrey>
                </Contact>

                <Price>
                    ${props.roomObj?.price}<span>/Night</span>
                </Price>

                <OfferPrice>
                    ${props.roomObj?.offerPrice}<span>/Night</span>
                </OfferPrice>

                <Status >
                    <StatusSpanRooms isAvaliable={props.roomObj?.isAvailable}>{isAvailable}</StatusSpanRooms>
                    <DeleteButtonsContainer>
                        <DeleteButton onClick={showDeleteOption}>
                            <BsThreeDotsVertical />
                        </DeleteButton>
                        <DeleteOption active={deleteOption} onClick={deleteRoomsClick}>
                                <span>Delete</span>
                        </DeleteOption>
                    </DeleteButtonsContainer>
                </Status>
            </ContainerRooms>
          );

        case "/users":

        let isActive: string;

        if(props.userObj?.isActive === true){
            isActive = "Active"
        }
        else{
            isActive = "Inactive"
        }
        return(
            <Container >
                <NameInfo>
                        <ImgContainer>
                            <img src={props.userObj?.photo}/>
                        </ImgContainer>
                        <NameProperties>
                            <h5>{props.userObj?.name}</h5>
                            <ElementGreyName>#{sliceID(props.userObj?._id!, 6)}</ElementGreyName>
                            <ElementGreyName>{props.userObj?.email}</ElementGreyName>
                            <ElementGreyName>{props.userObj?.startDate}</ElementGreyName>
                        </NameProperties>
                        
                </NameInfo>

                <Description>
                        <ElementGrey>{props.userObj?.descriptionJob}</ElementGrey>
                </Description>

                <Contact>
                        <HiPhone className="rowContent__telephoneIcon"/>
                        <ElementGrey>{props.userObj?.contact}</ElementGrey>
                </Contact>

                <Status >
                    <StatusSpan isActive={props.userObj?.isActive}> {isActive} </StatusSpan>
                    <DeleteButtonsContainer>
                        <DeleteButton onClick={showDeleteOption}>
                            <BsThreeDotsVertical />
                        </DeleteButton>
                        <DeleteOption active={deleteOption} onClick={deleteUserClick}>
                                <span>Delete</span>
                        </DeleteOption>
                    </DeleteButtonsContainer>
                    
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
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 0px 0px 10px 10px;
opacity: 1;
align-items: center;
margin-top: 1px;
    :hover{
        transition: all 0.3s;
        transform: scale(1.015);
    }
    :not(:hover) {
    transition: all 0.3s;
  } 
`

const ContainerRooms = styled(Container)`
display: grid;
grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
`
const ContainerBookings = styled(Container)`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
:hover{
    cursor: pointer;
 }
`


const NameInfo = styled.div`
display: flex;
width: auto;
align-items: center;
`

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    margin-right: 10px;
    padding-right: 10px;
    
    img{
        width: 70px;
        border-radius: 10px;
        height: 70px;
    }
`

const ElementGrey = styled.span`
    margin-top: 0px;
    font: normal normal normal 12px "Poppins";
    letter-spacing: 0px;
    color: #393939;
    opacity: 1; 
    display: flex;
    align-items: center;
`

const ElementGreyName = styled.span`
    margin-top: 2px;
    font-size: 11px;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1; 
`

const NameProperties = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
    h5{
        margin: 0px;
        padding-bottom: 0px;
        font-size: 14px;
        letter-spacing: 0px;
        color: #212121;
        opacity: 1;
    }

`

const Description = styled.div`
width: auto;
`

const Contact = styled.div`
display: flex;
align-items: center;
text-align: left;

width: auto;
    .rowContent__telephoneIcon{
        margin-right: 10px;
    }
`

const Status = styled.div`
width: auto;
font: normal normal 600 14px/21px 'Poppins';
letter-spacing: 0px;
opacity: 1;
display: flex;
justify-content: space-between;
align-items: center;
`

const StatusSpan = styled.span<PropsIsActive>`
margin-left: 20px;
text-transform: uppercase;
font: normal normal 600 14px/21px 'Poppins';
color: ${props => props.isActive===true ? "#5AD07A" : "#E23428" };
`

const StatusSpanBookings = styled.span<PropsStatus>`
margin-left: 0px;
width: 68px;
padding: 5px 12px 5px 12px;
font: normal normal 600 14px/21px 'Poppins';
font-size: 12px;
border-radius: 15px;
text-align: center;
color: ${props => props.status === "Check In" ? "#5AD07A" : props.status === "Check Out" ? "#E23428" :  "#F7DE3A"};
background-color: ${props => props.status === "Check In" ? "#E8FFEE" : props.status === "Check Out" ? "#FFEDEC" :  "#f8f8ed"};;
`

const StatusSpanRooms = styled.span<PropsIsAvaliable>`
text-align: center;
font: normal normal 600 14px/21px 'Poppins';
color: #FFFFFF;
background-color: ${props => props.isAvaliable === true ? "#5AD07A" : "#E23428"};
border-radius: 15px;
width: 70px;
padding: 10px 20px 10px 20px;
// `

const DeleteButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const DeleteButton = styled.a`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover{
        cursor: pointer;
    }
    
`

const DeleteOption = styled.a<PropsActive>`
    margin-top: 5px;
    color: #E23428;
    font-size: 14px;
    font-weight: 600;
    opacity: 1;
    background-color: #F8F8F8;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    visibility: ${props => props.active === true ? "visible" : "hidden"};
    font-size: 16px;
    :hover{
        cursor: pointer;
    }
`

const Price = styled.span`
width: auto;
`

const OfferPrice = styled.span`
width: auto;
`

