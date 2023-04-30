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

    const user = {
      id: 4,
      name: "user"
    }

    const addUserClick = () => {
      dispatch(addUser(user))
    }
  

    const deleteUserClick = () => {
        dispatch(deleteUser(user))
    }

    useEffect(() => {
        if (usersStatus == "idle") {
          dispatch(fetchUsers(usersJSON))
        }
      }, [usersStatus], dispatch);

      


      
    return (
        <>
        {/* <TableActions>
        <Button onClick={addUserClick}>Add Room</Button>
        <Button onClick={deleteUserClick}>Edit User</Button>
        </TableActions> */}
        <StyledTable tableTitles={tableTitles} data={usersData} />
        
        </>
        
    )
};

export default UsersPage;

const TableActions = styled.div`
width: auto;
`

const StyledTable = styled(Table)`
  
  display: flex;
  flex-direction: column;
`


