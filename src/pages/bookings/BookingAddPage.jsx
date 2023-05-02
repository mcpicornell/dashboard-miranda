import { useState } from "react";
import styled from "styled-components";
import { addBooking } from "../../features/asyncThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookingAddPage = () =>{

    const dispatch = useDispatch();
    const nav = useNavigate();
    const [guestName, setGuestName] = useState();
    const [orderDate, setOrderDate] = useState();
    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();
    const [specialRequest, setSpecialRequest] = useState();
    const [roomType, setRoomType] = useState();
    const [state, setState] = useState();

    const onSubmitHandler = () => {
        
            const newBooking = {
                id: Math.random(9999999),
                guest: guestName,
                orderDate: orderDate,
                checkIn: checkIn,
                checkOut: checkOut,
                specialRequest: specialRequest,
                roomType: roomType,
                status: state
            }

            dispatch(addBooking(newBooking));
            nav("/bookings");
    }

    return (
        <FormUserContainer onSubmit={onSubmitHandler}>
            <OptionsContainer>
                <LabelCreateUser>Guest Name:</LabelCreateUser>
                <InputCreateUser required placeholder="type the guest name"  onChange={e => setGuestName(e.target.value)} />
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
                <SelectUserOption required onChange={e => setRoomType(e.target.value)}>
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