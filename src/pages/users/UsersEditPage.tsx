import { useState } from "react";
import styled from "styled-components";
import { editUser } from "../../features/users/fetchUsers";
import { useAppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { IUsers } from "../../features/interfaces";
import {convertToDateFormat} from '../../features/functions'

const UsersEditPage = () =>{

    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const [photo, setPhoto] = useState("");
    const [fullName, setFullName] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [startDate, setStartDate] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState<boolean>(true);
    const [password, setPassword] = useState("");
    const [verificationPassword, setVerificationPassword] = useState("");

    const onSubmitHandler = () => {
        if (verificationPassword === password){
            const newUser: IUsers = {
                name: fullName,
                photo: photo,
                email: email,
                startDate: convertToDateFormat(new Date(startDate)),
                descriptionJob: description,
                contact: Number(contactNumber),
                isActive: isActive!,
                password: password
            }
            dispatch(editUser(newUser));
            nav("/users");

        }
        else{
            alert("Password fields do not match, please try again")
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
                    <option value="Admin">Admin</option>
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

                <SelectUserOption  onChange={e => setIsActive(Boolean(e.target.value))}>
                    <option value={"true"}>Active</option>
                    <option value={"false"}>Inactive</option>
                </SelectUserOption>

            </OptionsContainer>

            <OptionsContainer >
                <LabelCreateUser>Password:</LabelCreateUser>
                <InputCreateUser required placeholder="type your password"  onChange={e => setPassword(e.target.value)}/>

                <LabelCreateUser>Type your password again:</LabelCreateUser>
                <InputCreateUser required placeholder="type your password again for verification"  onChange={e => setVerificationPassword(e.target.value)}/>
            </OptionsContainer>

            <AddUser type="submit">Edit User</AddUser>

        </FormUserContainer>
        
    )

};

export default UsersEditPage;

const FormUserContainer = styled.form`
    margin-top: 150px;
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