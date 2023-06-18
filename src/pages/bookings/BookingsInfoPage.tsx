import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ImageSlicer from "../../components/Slicer";

const BookingsInfoPage = () => {
  const location = useLocation();
  const bookingObj = location.state;

  return (
    <CardBookingsInfo>
      <InfoBookingsInfo>
        <TitleContainer>
          <GuestName>{bookingObj.guest}</GuestName>
          <ID>{`ID ${bookingObj._id?.slice(-10).toUpperCase()}`}</ID>
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
        <Hr />
        <ElementContainerRow>
          <ElementContainerColumn>
            <GreyInfo>Room Info</GreyInfo>
            <CheckInOutSpan>{bookingObj.roomObj?.roomNumber}</CheckInOutSpan>
          </ElementContainerColumn>
          <ElementContainerColumn>
            <GreyInfo>Price</GreyInfo>
            <CheckInOutSpan>{`$${bookingObj.roomObj?.price}`}</CheckInOutSpan>
          </ElementContainerColumn>
        </ElementContainerRow>
        <SpecialRequestContainer>
          <SpecialRequest>{bookingObj.specialRequest}</SpecialRequest>
          <GreyInfo>Amenities</GreyInfo>
          <AmenitiesContainer>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[0]}</AmenitiesSpan>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[1]}</AmenitiesSpan>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[2]}</AmenitiesSpan>
            <AmenitiesSpan>{bookingObj.roomObj?.amenities[3]}</AmenitiesSpan>
          </AmenitiesContainer>
        </SpecialRequestContainer>
      </InfoBookingsInfo>

      <ImageSlicer images={bookingObj.roomObj.photos} status={bookingObj.status}/>
    </CardBookingsInfo>
  );
};

export default BookingsInfoPage;

const CardBookingsInfo = styled.section`
  background-color: #ffffff;
  margin-left: 10px;
  margin-top: 150px;
  margin-right: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 15px;
  padding-left: 40px;
`;

const InfoBookingsInfo = styled.div`
  width: 80%;
  margin-left: 40px;
`;

const TitleContainer = styled.div`
  width: auto;
`;

const GuestName = styled.h3`
  width: auto;
`;

const GreyInfo = styled.span`
  margin-left: 0px;
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #6e6e6e;
  opacity: 1;
`;

const ID = styled(GreyInfo)`
  position: relative;
  margin-left: 5px;
  bottom: 20px;
`;

const CheckInOutSpan = styled.span`
  margin-top: 5px;
  font: normal normal 600 14px/21px Poppins;
  letter-spacing: 0px;
  color: #212121;
  opacity: 1;
`;
const ElementContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const ElementContainerRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
`;

const Hr = styled.hr`
  color: #6e6e6e;
`;

const SpecialRequestContainer = styled.div``;

const SpecialRequest = styled.p`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #363636;
  opacity: 1;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const AmenitiesContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;

const AmenitiesSpan = styled.span`
  background: #ebf1ef 0% 0% no-repeat padding-box;
  padding: 10px 5px 10px 5px;
  font: normal normal 600 14px/21px "Poppins";
  color: #135846;
  opacity: 1;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
