import { useState } from "react";
import styled from "styled-components";
import { addRoom } from "../../features/asyncThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const RoomsAddPage = () =>{
    
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [photo1, setPhoto1] = useState("");
    const [photo2, setPhoto2] = useState("");
    const [photo3, setPhoto3] = useState("");
    const [photo4, setPhoto4] = useState("");
    const [photo5, setPhoto5] = useState("");

    const [roomName, setRoomName] = useState();
    const [roomNumber, setRoomNumber] = useState();
    const [roomType, setRoomType] = useState();
    const [amenitiesBath, setAmenitiesBath] = useState();
    const [amenitiesShower, setAmenitiesShower] = useState();
    const [amenitiesTV, setAmenitiesTV] = useState();
    const [amenitiesSeaViews, setAmenitiesSeaViews] = useState();
    const [amenitiesTowels, setAmenitiesTowels] = useState();
    const [amenitiesWiFi, setAmenitiesWiFi] = useState();
    const [price, setPrice] = useState(Number);
    const [offerPrice, setOfferPrice] = useState(Number);
    const [state, setState] = useState("Avaliable");
    
    const getPriceWithDiscount = (discount, total) =>{
        const result = (discount/100)*total;
        return Math.round(result);
    }

    const onSubmitHandler = () => {
            const newRoom = {
                id: Math.random(9999999),
                roomName: roomName,
                roomNumber: roomNumber,
                photos: {
                    photo1: photo1,
                    photo2: photo2,
                    photo3: photo3,
                    photo4: photo4,
                    photo5: photo5
                },
                roomType: roomType,
                amenities: [
                        amenitiesShower,
                        amenitiesBath,
                        amenitiesTV,
                        amenitiesSeaViews,
                        amenitiesTowels,
                        amenitiesWiFi
                ],
                price: price,
                offerPrice: getPriceWithDiscount(offerPrice, price),
                status: state,
            }
            dispatch(addRoom(newRoom));
            nav("/rooms");

    }

    return (
        
        <FormUserContainer onSubmit={onSubmitHandler}>
            <OptionsContainer>
                <LabelCreateUser>Photo1:</LabelCreateUser>
                <InputCreateUser required placeholder="type the url of the room photo"  onChange={e => setPhoto1(e.target.value)}/>
            </OptionsContainer>
            <OptionsContainer>
                <LabelCreateUser>Photo2:</LabelCreateUser>
                <InputCreateUser required placeholder="type the url of the room photo"  onChange={e => setPhoto2(e.target.value)}/>
            </OptionsContainer>
            <OptionsContainer>
                <LabelCreateUser>Photo3:</LabelCreateUser>
                <InputCreateUser required placeholder="type the url of the room photo"  onChange={e => setPhoto3(e.target.value)}/>
            </OptionsContainer>
            <OptionsContainer>
                <LabelCreateUser>Photo4:</LabelCreateUser>
                <InputCreateUser placeholder="type the url of the room photo"  onChange={e => setPhoto4(e.target.value)}/>
            </OptionsContainer>
            <OptionsContainer>
                <LabelCreateUser>Photo5:</LabelCreateUser>
                <InputCreateUser placeholder="type the url of the room photo"  onChange={e => setPhoto5(e.target.value)}/>
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Room Name:</LabelCreateUser>
                <InputCreateUser required placeholder="type the room name"  onChange={e => setRoomName(e.target.value)} />
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Room Number:</LabelCreateUser>
                <InputCreateUser required type="number" min={1} max={1000}  onChange={e => setRoomNumber(e.target.value)} />
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Room Type:</LabelCreateUser>
                <SelectUserOption  onChange={e => setRoomType(e.target.value)}>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Superior">Double Superior</option>
                    <option value="Suite">Suite</option>
                </SelectUserOption>
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Amenities:</LabelCreateUser>

                <OptionsContainer>
                    <CheckBoxContainer>
                        <CheckBox type="checkbox" value="Shower" onChange={e => setAmenitiesShower(e.target.value)} />
                        <CheckBoxOption>Shower</CheckBoxOption>
                    </CheckBoxContainer>

                    <CheckBoxContainer>
                        <CheckBox type="checkbox" value="Bath" onChange={e => setAmenitiesBath(e.target.value)} />
                        <CheckBoxOption>Bath</CheckBoxOption>
                    </CheckBoxContainer>

                    <CheckBoxContainer>
                        <CheckBox type="checkbox" value="TV" onChange={e => setAmenitiesTV(e.target.value)} />
                        <CheckBoxOption>TV</CheckBoxOption>
                    </CheckBoxContainer>

                    <CheckBoxContainer>
                        <CheckBox type="checkbox" value="Sea Views" onChange={e => setAmenitiesSeaViews(e.target.value)} />
                        <CheckBoxOption>Sea Views</CheckBoxOption>
                    </CheckBoxContainer>

                    <CheckBoxContainer>
                        <CheckBox type="checkbox" value="Towels" onChange={e => setAmenitiesTowels(e.target.value)} />
                        <CheckBoxOption>Towels</CheckBoxOption>
                    </CheckBoxContainer>

                    <CheckBoxContainer>
                        <CheckBox type="checkbox" value="WiFi" onChange={e => setAmenitiesWiFi(e.target.value)} />
                        <CheckBoxOption>WiFi</CheckBoxOption>
                    </CheckBoxContainer>
                </OptionsContainer>
                
                
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Price:</LabelCreateUser>
                <InputCreateUser type="number" required placeholder="type the original price"  onChange={e => setPrice(e.target.value)}/>
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Discount:</LabelCreateUser>
                <InputCreateUser type="number"  min="0" max="100" required placeholder="type the percentage of discount"  onChange={e => setOfferPrice(e.target.value)}/>
            </OptionsContainer>


            <OptionsContainer>
                <LabelCreateUser>State</LabelCreateUser>

                <SelectUserOption required  onChange={e => setState(e.target.value)}>
                    <option value={"Avaliable"}>Avaliable</option>
                    <option value={"Booked"}>Booked</option>
                </SelectUserOption>

            </OptionsContainer>

            <AddUser type="submit">Create New Room</AddUser>

        </FormUserContainer>
        
    )

};



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

const CheckBoxContainer = styled.div`
width: auto;
`

const CheckBox = styled.input`
width: auto;
`

const CheckBoxOption = styled.span`
width: auto;
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

export default RoomsAddPage;