import { useState } from "react";
import styled from "styled-components";
import { editUser } from "../../features/users/fetchUsers";
import { useAppDispatch } from "../../app/store";
import { useLocation, useNavigate } from "react-router-dom";
import { IUsers } from "../../features/interfaces";
import { convertToDateFormat, showToast } from "../../features/functions";
import { validateImageFormat } from "../../components/LateralMenu";

const UsersEditPage = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const [photo, setPhoto] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [jobPosition, setJobPosition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [verificationPassword, setVerificationPassword] = useState<string>("");
  const { state } = useLocation();
  const user = state.user;

  const isAdmin = (jobPosition: string) => {
    if (jobPosition === "Admin" || user.isAdmin === true) {
      return true;
    } else {
      return false;
    }
  };

  const checkIfPasswordAdmin = (password: string) => {
    if (user.isAdmin === true) {
      return user.password;
    } else {
      return password;
    }
  };

  const checkIfEmailAdmin = (email: string) => {
    if (user.isAdmin === true) {
      return user.password;
    } else {
      return email;
    }
  };

  const onSubmitHandler = () => {
    if (verificationPassword === password) {
      const userEdited: IUsers = {
        name: fullName,
        photo: validateImageFormat(photo),
        email: checkIfEmailAdmin(email),
        startDate: convertToDateFormat(new Date(startDate)),
        descriptionJob: description,
        contact: Number(contactNumber),
        isActive: isActive,
        password: checkIfPasswordAdmin(password),
        isAdmin: isAdmin(jobPosition),
      };
      dispatch(editUser(userEdited));
      nav("/users");
    } else {
      showToast("Password fields do not match, please try again", "error");
    }
  };

  return (
    <FormUserContainer onSubmit={onSubmitHandler}>
      <OptionsContainer>
        <LabelCreateUser>Photo:</LabelCreateUser>

        <InputCreateUser
          required
          placeholder="type the url of the user photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Full Name:</LabelCreateUser>

        <InputCreateUser
          required
          placeholder="type the full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Job position:</LabelCreateUser>

        <SelectUserOption onChange={(e) => setJobPosition(e.target.value)}>
          <option value="Manager">Manager</option>
          <option value="Reception">Reception</option>
          <option value="Room Service">Room Service</option>
          <option value="Admin">Admin</option>
        </SelectUserOption>
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Email:</LabelCreateUser>

        <InputCreateUser
          type="email"
          required
          placeholder="type the user email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Contact Number:</LabelCreateUser>

        <InputCreateUser
          type="number"
          required
          placeholder="type the user contact number"
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Start Date:</LabelCreateUser>

        <InputCreateUser
          type="date"
          required
          onChange={(e) => setStartDate(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Job Desk:</LabelCreateUser>

        <InputCreateUser
          required
          placeholder="type the description of the job position"
          onChange={(e) => setDescription(e.target.value)}
        />
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>State</LabelCreateUser>

        <SelectUserOption
          onChange={(e) => setIsActive(Boolean(e.target.value))}
        >
          <option value={"true"}>Active</option>
          <option value={"false"}>Inactive</option>
        </SelectUserOption>
      </OptionsContainer>

      <OptionsContainer>
        <LabelCreateUser>Password:</LabelCreateUser>
        <InputCreateUser
          required
          type="password"
          placeholder="type your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <LabelCreateUser>Type your password again:</LabelCreateUser>
        <InputCreateUser
          required
          type="password"
          placeholder="type your password again for verification"
          onChange={(e) => setVerificationPassword(e.target.value)}
        />
      </OptionsContainer>

      <AddUser type="submit">Edit User</AddUser>
    </FormUserContainer>
  );
};

export default UsersEditPage;

const FormUserContainer = styled.form`
  margin-top: 150px;
  margin-left: 80px;
  padding: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  height: 400px;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LabelCreateUser = styled.label`
  margin-right: 30px;
  margin-bottom: 10px;
`;

const InputCreateUser = styled.input`
  margin-bottom: 10px;
`;

const SelectUserOption = styled.select`
  margin-bottom: 10px;
`;
export const AddUser = styled.button`
  margin-right: 0;

  margin-top: 20px;
  font-weight: 700;
  background-color: #135846;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  color: #ffffff;
  text-decoration: none;
`;
