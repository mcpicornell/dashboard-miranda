import styled from "styled-components";
import { useLocation } from "react-router-dom";

const BookingsInfoPage = () => {
  const location = useLocation();
  const bookingObj = location.state;

  return (
    <CardBookingsInfo>
      <InfoBookingsInfo>
        <TitleContainer>
          <GuestName>{bookingObj.guest}</GuestName>
          <GreyInfo>{`#${bookingObj._id?.slice(-6)}`}</GreyInfo>
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
            <CheckInOutSpan>{bookingObj.roomObj?.roomNumber}</CheckInOutSpan>
          </ElementContainerColumn>
          <ElementContainerColumn>
            <GreyInfo>Price</GreyInfo>
            <CheckInOutSpan>{bookingObj.roomObj?.price}</CheckInOutSpan>
          </ElementContainerColumn>
        </ElementContainerRow>
        <SpecialRequestContainer>
          <SpecialRequest>{bookingObj.specialRequest}</SpecialRequest>
          <AmenitiesContainer>
            <GreyInfo>Amenities</GreyInfo>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[0]}</AmenitiesSpan>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[1]}</AmenitiesSpan>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[2]}</AmenitiesSpan>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[3]}</AmenitiesSpan>
          </AmenitiesContainer>
        </SpecialRequestContainer>
      </InfoBookingsInfo>

      <SliderBookingsInfo>
        <img
          className="slider-img"
          src={bookingObj.roomObj?.photos[0]}
          alt="hotel-room"
        />
      </SliderBookingsInfo>
    </CardBookingsInfo>
  );
};

export default BookingsInfoPage;

const CardBookingsInfo = styled.section`
  background-color: #ffffff;
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

  .slider-img {
    width: 100%;
    border-radius: 15px;
  }
`;

const InfoBookingsInfo = styled.div`
  width: auto;
`;

const TitleContainer = styled.div`
  width: auto;
`;

const GuestName = styled.h3`
  width: auto;
`;

const GreyInfo = styled.span`
  width: auto;
`;
const CheckInOutSpan = styled.span`
  width: auto;
`;
const ElementContainerColumn = styled.div`
  width: auto;
`;

const ElementContainerRow = styled.div`
  width: auto;
`;

const SpecialRequestContainer = styled.p`
  width: auto;
`;

const SpecialRequest = styled.p`
  width: auto;
`;

const AmenitiesContainer = styled.div`
  width: auto;
`;

const AmenitiesSpan = styled.span`
  width: auto;
`;
