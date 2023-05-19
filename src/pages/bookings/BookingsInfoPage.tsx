import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { IBookings } from '../../features/interfaces';
import { useState } from 'react';
import {getRoomsStatus, getRoomsData, getRoomsError, setRoom, getRoomObj} from "../../features/rooms/RoomsSlice"
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/store';
import { useAppSelector } from '../../app/store';

const BookingsInfoPage = () =>{
    const dispatch = useAppDispatch();
    const location = useLocation();
    const bookingObj: IBookings = location.state;
    const roomsStatus = useAppSelector(getRoomsStatus);
    const roomsData = useAppSelector(getRoomsData);
    const roomObj = useAppSelector(getRoomObj);
    const [stateRoomObj, setstateRoomObj] = useState()
    const roomsError = useAppSelector(getRoomsError);

    useEffect(() => {
        if (roomsStatus == "fulfilled") {
            dispatch(setRoom)
        }
     }, [roomsStatus]);
     
     console.log(roomObj)
    return (
        <CardBookingsInfo>
            <InfoBookingsInfo>
                <TitleContainer>
                    <GuestName>{bookingObj.guest}</GuestName>
                    <GreyInfo>{bookingObj.id}</GreyInfo>
                </TitleContainer>
                <ElementContainerRow>
                    <ElementContainerColumn>
                        <GreyInfo>Check In</GreyInfo>
                        <CheckInOutSpan>{bookingObj.checkIn}</CheckInOutSpan>

                    </ElementContainerColumn>
                    <ElementContainerColumn>
                        <GreyInfo>Check Out</GreyInfo>
                        <CheckInOutSpan>{bookingObj.checkOut}</CheckInOutSpan>
                        
                    </ElementContainerColumn>
                </ElementContainerRow>
                <ElementContainerRow>
                    <ElementContainerColumn>
                        <GreyInfo>Room Info</GreyInfo>
                        <CheckInOutSpan>{roomObj?.roomNumber}</CheckInOutSpan>

                    </ElementContainerColumn>
                    <ElementContainerColumn>
                        <GreyInfo>Price</GreyInfo>
                        <CheckInOutSpan>{roomObj?.price}</CheckInOutSpan>
                        
                    </ElementContainerColumn>
                </ElementContainerRow>
                <SpecialRequestContainer>
                    <SpecialRequest>{bookingObj.specialRequest}</SpecialRequest>
                    <AmenitiesContainer>
                        <GreyInfo>Amenities</GreyInfo>
                        <AmenitiesSpan>{roomObj?.amenities[0]}</AmenitiesSpan>
                        <AmenitiesSpan>{roomObj?.amenities[1]}</AmenitiesSpan>
                        <AmenitiesSpan>{roomObj?.amenities[2]}</AmenitiesSpan>
                        <AmenitiesSpan>{roomObj?.amenities[3]}</AmenitiesSpan>
                    </AmenitiesContainer>
                </SpecialRequestContainer>

            </InfoBookingsInfo>
             
            <SliderBookingsInfo>
                <img className='slider-img' src={roomObj?.photos[0]} alt='hotel-room' />
            </SliderBookingsInfo>
        </CardBookingsInfo>
       
    )

};

export default BookingsInfoPage;

const CardBookingsInfo = styled.section`
    background-color: #FFFFFF;
    margin-left: 50px;
    margin-top: 150px;
    margin-right: 50px;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 15px;
`;

const SliderBookingsInfo = styled.div`
    width: 100%;
   

    .slider-img{
        width: 100%;
        border-radius: 15px;
    }
`;

const InfoBookingsInfo = styled.div`
    width: auto;
`;

const TitleContainer = styled.div`
width: auto;
`

const GuestName = styled.h3`
width: auto;
`

const GreyInfo = styled.span`
width: auto;
`
const CheckInOutSpan = styled.span`
width: auto;
`
const ElementContainerColumn = styled.div`
width: auto;
`

const ElementContainerRow = styled.div`
width: auto;
`

const SpecialRequestContainer = styled.p`
width: auto;
`

const SpecialRequest = styled.p`
width: auto;
`

const AmenitiesContainer = styled.div`
width: auto;
`

const AmenitiesSpan = styled.span`
width: auto;
`
