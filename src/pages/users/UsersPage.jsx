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

     const tableTitles = [
        "Name",
        "Start Date",
        "Description",
        "Phone",
        "Email",
        "Status",
        "Details",
        "Delete",
      ];

    useEffect(() => {
        if (usersStatus == "idle") {
          dispatch(fetchUsers(usersJSON))
        }
      }, [usersStatus], dispatch);

      const user = {
        id: 4,
        name: "user"
      }

      const addUserClick = () => {
        dispatch(addUser(user))
        console.log("Se añade usuario")
        console.log(usersData)
    }

    const deleteUserClick = () => {
        dispatch(deleteUser(user))
        console.log("Se elimina usuario")
        console.log(usersData)
    }
      
    return (
        <>
        {/* <TableActions>
        <Button onClick={addUserClick}>Add Room</Button>
        <Button onClick={deleteUserClick}>Edit User</Button>
        </TableActions> */}
        <Table tableTitles={tableTitles} data={usersData} />
        
        </>
        
    )
};

export default UsersPage;

const TableActions = styled.div`
width: auto;
`


