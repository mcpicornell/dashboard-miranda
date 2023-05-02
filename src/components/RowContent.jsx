import styled from "styled-components"
import {HiPhone} from "react-icons/hi"
import {BsThreeDotsVertical} from "react-icons/bs"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteUser, deleteRoom, deleteBooking } from "../features/asyncThunk"
import { useLocation } from "react-router-dom"

export const RowContent = (props) => {
    const dispatch = useDispatch();
    const [deleteOption, setdeleteOption] = useState(false);
    const location = useLocation();

    const showDeleteOption = (event) => {
        setdeleteOption(prevState => !prevState);
    }

    const deleteBookingOnClick = () =>{
        dispatch(deleteBooking(props.info))
        setdeleteOption(prevState => !prevState);
    }

    const deleteUserClick = () => {
        setdeleteOption(prevState => !prevState);
        dispatch(deleteUser(props.info))
        
    }

    const deleteroomsClick = () => {
        dispatch(deleteRoom(props.info))
        setdeleteOption(prevState => !prevState);
    }

    const arrayWithoutEmptyStrings = (array) =>{
        const result = array.filter(element => element !== undefined).join(", ")
        return result;
    }
    console.log(props.info)
    
    switch(location.pathname){
        case "/bookings":
            return(
                <ContainerBookings>
                    <NameInfo>
                        
                        <NameProperties>
                            <ElementGreyName>#{props.info.id}</ElementGreyName>
                            <h5>{props.info.guest}</h5>
                        </NameProperties>
                        
                    </NameInfo>

                    <Description>
                            <ElementGrey>{props.info.orderDate}</ElementGrey>
                    </Description>

                    <Contact>
                            <ElementGrey>{props.info.checkIn}</ElementGrey>
                    </Contact>

                    
                    <Contact>
                            <ElementGrey>{props.info.checkOut}</ElementGrey>
                    </Contact>

                    <Contact>
                            <ElementGrey>{props.info.specialRequest}</ElementGrey>
                    </Contact>

                    <Contact>
                            <ElementGrey>{props.info.roomType}</ElementGrey>
                    </Contact>

                    <Status >
                        <StatusSpanBookings status={props.info.status}>{props.info.status}</StatusSpanBookings>
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
        return(
            <ContainerRooms info={props.info}>
                <NameInfo>
                        <ImgContainer>
                            <img src={props.info.photos.photo1}/>
                        </ImgContainer>
                        <NameProperties>
                            <ElementGreyName>#{props.info.id}</ElementGreyName>
                            <h5>{props.info.roomName}</h5>
                        </NameProperties>
                        
                </NameInfo>

                <Description>
                        <ElementGrey>{props.info.roomType}</ElementGrey>
                </Description>

                <Contact>
                        <ElementGrey>{arrayWithoutEmptyStrings(props.info.amenities)}</ElementGrey>
                </Contact>

                <Price>
                    ${props.info.price}<span>/Night</span>
                </Price>

                <OfferPrice>
                    ${props.info.offerPrice}<span>/Night</span>
                </OfferPrice>

                <Status >
                    <StatusSpanRooms status={props.info.status}>{props.info.status}</StatusSpanRooms>
                    <DeleteButtonsContainer>
                        <DeleteButton onClick={showDeleteOption}>
                            <BsThreeDotsVertical />
                        </DeleteButton>
                        <DeleteOption active={deleteOption} onClick={deleteroomsClick}>
                                <span>Delete</span>
                        </DeleteOption>
                    </DeleteButtonsContainer>
                </Status>
            </ContainerRooms>
          );

        case "/users":
        return(
            <Container >
                <NameInfo>
                        <ImgContainer>
                            <img src={props.info.photo}/>
                        </ImgContainer>
                        <NameProperties>
                            <h5>{props.info.name}</h5>
                            <ElementGreyName>#{props.info.id}</ElementGreyName>
                            <ElementGreyName>{props.info.email}</ElementGreyName>
                            <ElementGreyName>{props.info.startDate}</ElementGreyName>
                        </NameProperties>
                        
                </NameInfo>

                <Description>
                        <ElementGrey>{props.info.descriptionJob}</ElementGrey>
                </Description>

                <Contact>
                        <HiPhone className="rowContent__telephoneIcon"/>
                        <ElementGrey>{props.info.contact}</ElementGrey>
                </Contact>

                <Status >
                    <StatusSpan status={props.info.status}>{props.info.status}</StatusSpan>
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

const StatusSpan = styled.span`
margin-left: 20px;
text-transform: uppercase;
font: normal normal 600 14px/21px 'Poppins';
color: ${props => props.status==="Active" ? "#5AD07A" : "#E23428" };
`

const StatusSpanBookings = styled.span`
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

const StatusSpanRooms = styled.span`
text-align: center;
font: normal normal 600 14px/21px 'Poppins';
color: #FFFFFF;
background-color: ${props => props.status === "Avaliable" ? "#5AD07A" : "#E23428"};
border-radius: 15px;
width: 70px;
padding: 10px 20px 10px 20px;
`

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

const DeleteOption = styled.a`
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

