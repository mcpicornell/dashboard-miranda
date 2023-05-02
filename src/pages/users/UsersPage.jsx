import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsersStatus, getUsersData, getUsersError} from '../../features/users/UsersSlice'
import { fetchUsers, addUser, deleteUser } from "../../features/asyncThunk";
import usersJSON from "../../data/users.json";
import styled from "styled-components";

import { Table } from "../../components/Table";
import { Button } from "../../components/Button";

const UsersPage = () =>{


     const dispatch = useDispatch();
     
     const usersStatus = useSelector(getUsersStatus);
     const usersData = useSelector(getUsersData);
     const usersError = useSelector(getUsersError);

     const titleRowUsers = {
      name: "Name",
      description: "Description",
      contact: "Contact",
      status: "Status"
    }

    

    useEffect(() => {
        if (usersStatus == "idle") {
          dispatch(fetchUsers(usersJSON))
        }
      }, [usersStatus], dispatch);

    return (
        <>
        <Table titleRowUsers={titleRowUsers} usersData={usersData} />
        </>
    )
};

export default UsersPage;





