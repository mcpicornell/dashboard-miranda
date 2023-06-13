import { useState } from "react";
import styled from "styled-components";
import { addBooking } from "../../features/bookings/fetchBookings";
import { useAppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { IBookings, IRooms } from "../../features/interfaces";
const BookingAddPage = () =>{

    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const [guestName, setGuestName] = useState<string>();
    const [orderDate, setOrderDate] = useState<string>();
    const [checkIn, setCheckIn] = useState<string>();
    const [checkOut, setCheckOut] = useState<string>();
    const [specialRequest, setSpecialRequest] = useState<string>();
    const [roomType, setRoomType] = useState<string>();
    const [roomTypeObj, setRoomTypeObj] = useState<string>();
    const [state, setState] = useState<string>();

    // const onSubmitHandler = () => {
    //     switch(roomType){
    //         case  "Single Bed":
    //             setRoomTypeObj( {
    //                 roomName: "Deluxe A-1",
    //                 status: "Booked",
    //                 offerPrice: 100,
    //                 price: 145,
    //                 roomNumber: 101,
    //                 roomType: "Single Bed",
    //                 amenities: ["suite bath", "suite bath", "suite bath", "suite bath"],
    //                 photos: ["https://images.unspla.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"]
    //             })
    //             break;

    //         case  "Double Bed":
    //             setRoomTypeObj({
    //                 id: 2,
    //                 roomName: "Deluxe B-1",
    //                 status: "Avaliable",
    //                 offerPrice: 100,
    //                 price: 145,
    //                 roomNumber: 102,
    //                 roomType: "Double Bed",
    //                 amenities: ["suite bath", "suite bath", "suite bath", "suite bath"],
    //                 photos: ["https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"],
    //             })
    //             break;
    //         case  "Double Superior":
    //             setRoomTypeObj({
    //                 id: 3,
    //                 roomName: "Deluxe C-3",
    //                 status: "Avaliable",
    //                 offerPrice: 100,
    //                 price: 145,
    //                 roomNumber: 102,
    //                 roomType: "Double Superior",
    //                 amenities: ["suite bath", "suite bath", "suite bath", "suite bath"],
    //                 photos: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
    //             })
    //             break;
    //         case  "Suite":
    //             setRoomTypeObj({
    //                 id: 4,
    //                 roomName: "Deluxe D-4",
    //                 status: "Booked",
    //                 offerPrice: 100,
    //                 price: 145,
    //                 roomNumber: 102,
    //                 roomType: "Suite",
    //                 amenities: ["suite bath", "suite bath", "suite bath", "suite bath"],
    //                 photos: ["https://plus.unsplash.com/premium_photo-1661956080119-71234af803b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"]
    //             })
    //     }
    //         const newBooking: IBookings = {
    //             guest: guestName!,
    //             orderDate: orderDate!,
    //             checkIn: checkIn!,
    //             checkOut: checkOut!,
    //             specialRequest: specialRequest!,
    //             roomId: roomTypeObj!,
    //             status: state!
    //         }

    //         dispatch(addBooking(newBooking));
    //         nav("/bookings");
    //     }

    const onSubmitHandler = () => {
        
            const bookingPosted: IBookings = {
                guest: guestName!,
                orderDate: orderDate!,
                checkIn: checkIn!,
                checkOut: checkOut!,
                specialRequest: specialRequest!,
                roomId: roomTypeObj!,
                status: state!
            }

            dispatch(addBooking(bookingPosted));
            nav("/bookings");
        }
    

    return (
        <FormUserContainer onSubmit={onSubmitHandler}>
            <OptionsContainer>
                <LabelCreateUser>Guest Name:</LabelCreateUser>
                <InputCreateUser required placeholder="type the guest name"  onChange={(event :React.ChangeEvent<HTMLInputElement>) => {setGuestName(event.target.value)}} />
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Order Date:</LabelCreateUser>
                <InputCreateUser required type="date"  onChange={e => setOrderDate(e.target.value)} />
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Check In:</LabelCreateUser>
                <InputCreateUser required type="date"  onChange={e => setCheckIn(e.target.value)} />
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Check Out:</LabelCreateUser>
                <InputCreateUser required type="date"  onChange={e => setCheckOut(e.target.value)} />
            </OptionsContainer>

            

            <OptionsContainer>
                <LabelCreateUser>Room Type:</LabelCreateUser>
                <SelectUserOption required onChange={event => setRoomType(event.target.value)}>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Superior">Double Superior</option>
                    <option value="Suite">Suite</option>
                </SelectUserOption>
            </OptionsContainer>
            

            <OptionsContainer>
                <LabelCreateUser>State:</LabelCreateUser>

                <SelectUserOption required  onChange={e => setState(e.target.value)}>
                    <option value={"Check In"}>Check In</option>
                    <option value={"Check Out"}>Check Out</option>
                    <option value={"In Progress"}>In Progress</option>
                </SelectUserOption>

            </OptionsContainer>

            <SpecialRequestContainer>
                <LabelCreateUser>Special Request:</LabelCreateUser>
                <SpecialRequestBox type="text" placeholder="type the guest request, max of 2000 characters" maxLength={2000}  onChange={e => setSpecialRequest(e.target.value)}/>
            </SpecialRequestContainer>

            <AddUser type="submit">Create New Booking</AddUser>

        </FormUserContainer>
        
    )

};

export default BookingAddPage;

const FormUserContainer = styled.form`
    margin-top: 170px;
    margin-left: 80px;
    padding: 30px;
    border-radius: 10px;
    background-color: #FFFFFF;
    height: 400px;
`

const OptionsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

`

const LabelCreateUser = styled.label`
margin-right: 30px;
margin-bottom: 10px;

`

const InputCreateUser = styled.input`
margin-bottom: 10px;
`

const SelectUserOption = styled.select`
margin-bottom: 10px;
`
const AddUser = styled.button`
    margin-right: 0;
    
    margin-top: 20px;
    font-weight: 700;
    background-color: #135846;
    border-radius: 15px;
    padding: 10px 25px 10px 25px;
    font: normal normal medium 16px/25px "Poppins";
    letter-spacing: 0px;
    color: #FFFFFF;
    text-decoration: none;
`

const SpecialRequestContainer = styled.div`
display: flex;
flex-direction: column;
`
const SpecialRequestBox = styled.input`
text-align: start;
border-radius: 5px;
padding-bottom: 90px;
padding-top: 10px;
padding-left: 10px;
border: 1px solid grey;
`