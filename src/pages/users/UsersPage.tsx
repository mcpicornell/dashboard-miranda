import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsersStatus, getUsersData, getUsersError} from '../../features/users/UsersSlice'
import { fetchUsers, addUser, deleteUser } from "../../features/asyncThunk";
import usersJSON from "../../data/users.json";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../app/store";
import { Table } from "../../components/Table";
import { Button } from "../../components/Button";

const UsersPage = () =>{


     const dispatch = useAppDispatch();
     
     const usersStatus = useAppSelector(getUsersStatus);
     const usersData = useAppSelector(getUsersData);
     const usersError = useAppSelector(getUsersError);

     const usersTitles = {
      name: "Name",
      description: "Description",
      contact: "Contact",
      status: "Status"
    }

    useEffect(() => {
        if (usersStatus == "idle") {
          dispatch(fetchUsers(usersJSON))
        }
      }, [usersStatus]);

    return (
        <>
        <Table usersTitles={usersTitles} usersData={usersData} />
        </>
    )
};

export default UsersPage;





