import { useState } from "react";
import styled from "styled-components";
import { addUser } from "../../features/asyncThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersAddPage = () =>{

    const dispatch = useDispatch();
    const nav = useNavigate();
    const [photo, setPhoto] = useState("");
    const [fullName, setFullName] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [startDate, setStartDate] = useState("");
    const [description, setDescription] = useState("");
    const [state, setState] = useState("");
    const [password, setPassword] = useState("");
    const [verificationPassword, setVerificationPassword] = useState("");


   

    const onSubmitHandler = () => {
        if (verificationPassword === password){
            const newUser = {
                id: Math.random(9999999),
                name: fullName,
                photo: photo,
                email: email,
                startDate: startDate,
                descriptionJob: description,
                contact: contactNumber,
                status: state,
                password: password
            }
            dispatch(addUser(newUser));
            nav("/users");

        }
        else{
            console.log("La contraseña de tu nuevo usuario no coincide")
        }

    }

    return (
        <FormUserContainer onSubmit={onSubmitHandler}>
            <OptionsContainer>
                <LabelCreateUser>Photo:</LabelCreateUser>

                <InputCreateUser required placeholder="type the url of the user photo"  onChange={e => setPhoto(e.target.value)}/>

            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Full Name:</LabelCreateUser>

                <InputCreateUser required placeholder="type the full name"  onChange={e => setFullName(e.target.value)} />

            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Job position:</LabelCreateUser>

                <SelectUserOption  onChange={e => setJobPosition(e.target.value)}>
                    <option value="Manager">Manager</option>
                    <option value="Reception">Reception</option>
                    <option value="Room Service">Room Service</option>
                </SelectUserOption>

            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Email:</LabelCreateUser>

                <InputCreateUser type="email" required placeholder="type the user email"  onChange={e => setEmail(e.target.value)}/>

            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Contact Number:</LabelCreateUser>

                <InputCreateUser type="number" required placeholder="type the user contact number"  onChange={e => setContactNumber(e.target.value)}/>

            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Start Date:</LabelCreateUser>

                <InputCreateUser type="date"  required  onChange={e => setStartDate(e.target.value)}/>
            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>Job Desk:</LabelCreateUser>

                <InputCreateUser required placeholder="type the description of the job position"  onChange={e => setDescription(e.target.value)}/>

            </OptionsContainer>

            <OptionsContainer>
                <LabelCreateUser>State</LabelCreateUser>

                <SelectUserOption  onChange={e => setState(e.target.value)}>
                    <option value={"Active"}>Active</option>
                    <option value={"Inactive"}>Inactive</option>
                </SelectUserOption>

            </OptionsContainer>

            <OptionsContainer >
                <LabelCreateUser>Password:</LabelCreateUser>
                <InputCreateUser required placeholder="type your password"  onChange={e => setPassword(e.target.value)}/>

                <LabelCreateUser>Type your password again:</LabelCreateUser>
                <InputCreateUser required placeholder="type your password again for verification"  onChange={e => setVerificationPassword(e.target.value)}/>
            </OptionsContainer>

            <AddUser type="submit">Create User</AddUser>

        </FormUserContainer>
        
    )

};

export default UsersAddPage;

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
export const AddUser = styled.button`
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