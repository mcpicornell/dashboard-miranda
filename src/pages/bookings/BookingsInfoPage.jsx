import styled from 'styled-components';
import hotelPhoto from '../../img/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg';

const BookingsInfoPage = () =>{

    

    return (

        <CardBookingsInfo>
            <InfoBookingsInfo>

            </InfoBookingsInfo>
             
            <SliderBookingsInfo>
                <img className='slider-img' src={hotelPhoto} alt='hotel-room' />
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